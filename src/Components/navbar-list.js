import React from 'react';
import SubLevelList, { getCustomSubLevelListCSS } from '../styled-components/SubLevelList';
import SubLevelItem, { getCustomSubLevelItemCSS } from '../styled-components/SubLevelItem';
import LevelLink from '../styled-components/LevelLink';

const NavbarList = ({ levelList, isFirstSubLevel, belongsTo, custom_colors }) => {

    const selectNextOrPreviousGroup = (isPrevious, parentTarget, currentTarget) => {

        if (!isPrevious) {
            
            [...parentTarget.parentElement.querySelectorAll(`[data-navbar-belongsto]`)]
                .filter(n => n.getAttribute('data-navbar-belongsto') !== 'root')
                .forEach(n => n.style.display = 'none');

            [...parentTarget.parentElement.querySelectorAll(`[data-navbar-belongsto=${currentTarget.getAttribute('data-navbar-partof')
                }]`)].forEach(n => n.style.display = '');

        }

        const filteredGroups = [...parentTarget.parentElement.childNodes].filter(n => n.style.display != 'none');
        const currentGroupIndex = filteredGroups.findIndex(n => n === parentTarget);

        return isPrevious ?
            filteredGroups[currentGroupIndex - 1]
            :
            filteredGroups[currentGroupIndex + 1];
    }

    const enableDisableButtons = (disable, listElement) => {
        const groupElements = listElement.parentElement.childNodes;
        groupElements.forEach(list => list.setAttribute('data-navbar-disabled', disable));
    }

    const assignGroupSizes = (currentTarget, listElement, isPrevious) => {

        const currentItems = [...currentTarget.parentElement.childNodes]
            .filter(node => node.localName === 'li')
        const itemCurrentSizes = currentItems.map(item => item.offsetWidth);

        const items = [...listElement.childNodes].filter(node => node.nodeName !== '#text');
        const itemSizes = items.map(item => item.offsetWidth);

        const largestCurrentItem = itemCurrentSizes.reduce((prev, curr) => prev < curr ? curr : prev);
        const largestItem = itemSizes.reduce((prev, curr) => prev < curr ? curr : prev);

        const levelWidth = largestItem >= 200 ? 200 : largestItem;
        const currentLevelWidth = largestCurrentItem >= 200 ? 200 : largestCurrentItem;

        listElement.parentElement.style.width = `${levelWidth}px`;
        listElement.parentElement.style.height = `${listElement.offsetHeight}px`;

        moveGroupScroll(listElement, isPrevious, currentLevelWidth);

    }

    const moveGroupScroll = (listElement, isPrevious, currentLevelWidth) => {
        let newScrollLeft = listElement.parentElement.scrollLeft;

        if (isPrevious) {
            newScrollLeft -= currentLevelWidth + (16 * 2) - 16;
        } else {
            newScrollLeft += currentLevelWidth + (16 * 2) - 16;
        }

        const scroll = setInterval(function () {

            if (isPrevious) {
                listElement.parentElement.scrollLeft -= window.devicePixelRatio;
                if (listElement.parentElement.scrollLeft <= newScrollLeft) {
                    listElement.parentElement.style.display = 'none';
                    clearInterval(scroll);
                    enableDisableButtons(false, listElement);
                }
            } else {
                listElement.parentElement.scrollLeft += window.devicePixelRatio;
                if (listElement.parentElement.scrollLeft >= newScrollLeft) {
                    listElement.parentElement.style.display = 'none';
                    clearInterval(scroll);
                    enableDisableButtons(false, listElement);
                }
            }

        }, 1);
    }

    const changeGroup = ({ currentTarget }, isPrevious) => {

        const parentTarget = currentTarget.parentElement;

        if (parentTarget.getAttribute('data-navbar-disabled') == 'true') return;

        const listElement = selectNextOrPreviousGroup(isPrevious, parentTarget, currentTarget);
        
        enableDisableButtons(true, listElement);
        listElement.parentElement.style.display = 'block';

        assignGroupSizes(currentTarget, listElement, isPrevious);

    }

    return (
        <SubLevelList css={getCustomSubLevelListCSS(custom_colors)}
            data-navbar-belongsto={isFirstSubLevel ? 'root' : belongsTo}
            style={isFirstSubLevel ? { display: '' } : { display: 'none' }}>
            {
                levelList.map(([levelName, value, isLevelNumber], index) => {
                    return (
                        <React.Fragment key={index}>
                            { !isFirstSubLevel && index === 0 ?
                                <SubLevelItem css={getCustomSubLevelItemCSS(custom_colors)}
                                    key={index}
                                    data-navbar-back
                                    onClick={(event) => changeGroup(event, true)}
                                    tabIndex="1">
                                    
                                </SubLevelItem> : ''
                            }
                            {
                                value === 'next' ?

                                    <SubLevelItem css={getCustomSubLevelItemCSS(custom_colors)}
                                        onClick={(event) => changeGroup(event, false)}
                                        data-navbar-partof={isLevelNumber}>
                                        {levelName}
                                    </SubLevelItem>
                                    :
                                    <SubLevelItem css={getCustomSubLevelItemCSS(custom_colors)}>
                                        <LevelLink href={value}>{levelName}</LevelLink>
                                    </SubLevelItem>
                            }
                        </React.Fragment>
                    )
                })
            }

        </SubLevelList>
    )
}

export default NavbarList;