import React from 'react';
import styles from '../Styles/styles.module.css';

const NavbarList = ({ levelList, isFirstSubLevel, belongsTo }) => {

    const changeGroup = ({ currentTarget }, isPrevious) => {

        const parentTarget = currentTarget.parentElement;

        if (!isPrevious) {
            [...parentTarget.parentElement.querySelectorAll(`[data-navbar-belongsto]`)]
                .filter(n => n.getAttribute('data-navbar-belongsto') !== 'root')
                .forEach(n => n.style.display = 'none');

            [...parentTarget.parentElement.querySelectorAll(`[data-navbar-belongsto=${
                currentTarget.getAttribute('data-navbar-partof')
            }]`)].forEach(n => n.style.display = '');

        }

        const filteredGroups = [...parentTarget.parentElement.childNodes].filter(n=>n.style.display != 'none');
        const currentGroupIndex = filteredGroups.findIndex(n=>n === parentTarget);

        const groupElement = isPrevious ? 
        filteredGroups[currentGroupIndex-1]
            :
        filteredGroups[currentGroupIndex+1];

        groupElement.parentElement.style.display = 'block';

        const currentItems = [...currentTarget.parentElement.childNodes]
            .filter(node => node.localName === 'li')
        const itemCurrentSizes = currentItems.map(item => item.offsetWidth);

        const items = [...groupElement.childNodes].filter(node => node.nodeName !== '#text');
        const itemSizes = items.map(item => item.offsetWidth);

        const largestCurrentItem = itemCurrentSizes.reduce((prev, curr) => prev < curr ? curr : prev);
        const largestItem = itemSizes.reduce((prev, curr) => prev < curr ? curr : prev);

        const levelWidth = largestItem >= 200 ? 200 : largestItem;
        const currentLevelWidth = largestCurrentItem >= 200 ? 200 : largestCurrentItem;

        groupElement.parentElement.style.width = `${levelWidth}px`;
        groupElement.parentElement.style.height = `${groupElement.offsetHeight}px`;

        let newScrollLeft;
        if (isPrevious) {
            newScrollLeft = levelWidth + 16;
        } else {
            newScrollLeft = currentLevelWidth + (16 * 2) - 16;
        }

        let scrollAmount = 0;
        const scroll = setInterval(function () {

            if (isPrevious) {
                groupElement.parentElement.scrollLeft -= 1;
            } else {
                groupElement.parentElement.scrollLeft += 1;
            }

            scrollAmount += 1;
            if (scrollAmount >= newScrollLeft) {
                groupElement.parentElement.style.display = 'none';
                clearInterval(scroll);
            }

        }, 5);

    }

    return (
        <ul className={styles.navBar__list} 
        data-navbar-belongsto={isFirstSubLevel ? 'root': belongsTo} 
        style={isFirstSubLevel ? {display: ''} : {display: 'none'}}>
            {
                levelList.map(([levelName, value, isLevelNumber], index) => {
                    return (
                        <React.Fragment key={index}>
                            { !isFirstSubLevel && index === 0 ? 
                                <li key={index}
                                 className={styles.navBar__listItem}
                                 onClick={(event) => changeGroup(event, true)}
                                 tabIndex="1">
                                    Back
                                </li> : ''
                            }
                            {
                                value === 'next' ?

                                    <li className={styles.navBar__listItem} 
                                    onClick={(event) => changeGroup(event, false)}
                                    data-navbar-partof={isLevelNumber}>
                                        {levelName}
                                    </li>
                                    :
                                    <li className={styles.navBar__listItem}>
                                        <a className={styles.navBar__link} href={value}>{levelName}</a>
                                    </li>
                            }
                        </React.Fragment>
                    )
                })
            }

        </ul>
    )
}

export default NavbarList;