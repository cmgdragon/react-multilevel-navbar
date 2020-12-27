import React from 'react';
import SubLevelList from '../styled-components/SubLevelList';
import SubLevelItem from '../styled-components/SubLevelItem';
import ItemLink from '../styled-components/ItemLink';

const NavbarList = ({ levelList, customcss, isFirstSubLevel, belongsTo }) => {

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

        listElement.parentElement.style.height = `${listElement.offsetHeight}px`;

        moveGroupScroll(currentTarget, listElement, isPrevious);

    }

    const moveGroupScroll = (currentTarget, listElement, isPrevious) => {
        let newScrollLeft = listElement.parentElement.scrollLeft;

        if (isPrevious) {
            newScrollLeft -= 200 + (16 * 2) - 16;
        } else {
            newScrollLeft += 200 + (16 * 2) - 16;
        }

        const scroll = setInterval(function () {

            if (isPrevious) {
                listElement.parentElement.scrollLeft -= window.devicePixelRatio *2;
                if (listElement.parentElement.scrollLeft <= newScrollLeft) {
                    listElement.parentElement.style.display = 'none';
                    if (window.innerWidth >= customcss.mobile_breakpoint)
                        currentTarget.blur();
                    clearInterval(scroll);
                    enableDisableButtons(false, listElement);
                }
            } else {
                listElement.parentElement.scrollLeft += window.devicePixelRatio*2;
                if (listElement.parentElement.scrollLeft >= newScrollLeft) {
                    listElement.parentElement.style.display = 'none';
                    if (window.innerWidth >= customcss.mobile_breakpoint)
                        currentTarget.blur();
                    clearInterval(scroll);
                    enableDisableButtons(false, listElement);
                }
            }

        }, 1);
    }

    const enableDisableTab = (disable, listElement) => {
        [...listElement.childNodes]
        .filter(node => node.nodeName !== '#text')
        .forEach(item => item.setAttribute('tabIndex', disable ? '-1' : '1'));
    }

    const changeGroupWithKeyboard = event => {

        if (event.code === 'Tab') return;

        const parentTarget = event.currentTarget.parentElement;

        parentTarget.parentElement.parentElement.focus(); 
        event.currentTarget.click();

    }

    const changeGroup = ({ currentTarget }, isPrevious) => {

        const parentTarget = currentTarget.parentElement;

        if (parentTarget.getAttribute('data-navbar-disabled') == 'true') return;

        const listElement = selectNextOrPreviousGroup(isPrevious, parentTarget, currentTarget);
        console.log(listElement.offsetHeight)
        enableDisableTab(true, parentTarget);
        enableDisableTab(false,listElement);
        enableDisableButtons(true, listElement);
        listElement.parentElement.style.display = 'block';

        assignGroupSizes(currentTarget, listElement, isPrevious);

    }

    return (
        <SubLevelList 
            props={customcss}
            data-navbar-belongsto={isFirstSubLevel ? 'root' : belongsTo}
            style={isFirstSubLevel ? { display: '' } : { display: 'none' }} tabIndex={-1}>
            {
                levelList.map(([levelName, url, isLevelNumber], index) => {
                    return (
                        <React.Fragment key={index}>
                            { !isFirstSubLevel && index === 0 ?
                                <SubLevelItem 
                                    props={customcss}
                                    key={index}
                                    data-navbar-back
                                    onClick={(event) => changeGroup(event, true)}
                                    onKeyDown={changeGroupWithKeyboard}
                                    tabIndex={isFirstSubLevel ? 1 : -1}>
                                    
                                </SubLevelItem> : ''
                            }
                            {
                                url === 'next' ?

                                    <SubLevelItem 
                                        props={customcss}
                                        onClick={(event) => changeGroup(event, false)}
                                        onKeyDown={changeGroupWithKeyboard}
                                        data-navbar-partof={isLevelNumber}
                                        tabIndex={isFirstSubLevel ? 1 : -1}>
                                        <span>{levelName}</span>
                                    </SubLevelItem>
                                    :
                                    <ItemLink 
                                        props={customcss}
                                        tabIndex={isFirstSubLevel ? 1 : -1}
                                        onClick={({currentTarget}) => currentTarget.blur()}
                                        href={url}
                                        props={customcss}>
                                        {levelName}
                                    </ItemLink>
                            }
                        </React.Fragment>
                    )
                })
            }

        </SubLevelList>
    )
}

export default NavbarList;