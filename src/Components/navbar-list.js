import React from 'react';
import styles from '../Styles/styles.module.css';

const NavbarList = ({ levelList, isFirstSubLevel }) => {

    const changeGroup = ({ currentTarget }, isPrevious) => {

        const groupElement = isPrevious ? currentTarget.parentElement.previousElementSibling :
            currentTarget.parentElement.nextElementSibling;

        groupElement.parentElement.style.display = 'block';

        const currentItems = [...currentTarget.parentElement.childNodes]
            .filter(node => node.localName === 'li')
        const itemCurrentSizes = currentItems.map(item => item.offsetWidth);

        const items = [...groupElement.childNodes].filter(node => node.localName === 'li');
        const itemCount = items.length;
        const itemSizes = items.map(item => item.offsetWidth);

        const largestCurrentItem = itemCurrentSizes.reduce((prev, curr) => prev < curr ? curr : prev);
        const largestItem = itemSizes.reduce((prev, curr) => prev < curr ? curr : prev);
        console.log("ea",itemSizes)

        const levelWidth = largestItem >= 200 ? 200 : largestItem;
        const currentLevelWidth = largestCurrentItem >= 200 ? 200 : largestCurrentItem;

        groupElement.parentElement.style.width = `${levelWidth}px`;
        //groupElement.parentElement.style.height = `${(16 * itemCount) + (8 * itemCount) + 8*2}px`;

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
        <ul className={styles.navBar__list}>
            {
                levelList.map((item, index) => {
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
                                item[1] === 'next' ?

                                    <li className={styles.navBar__listItem} onClick={(event) => changeGroup(event, false)} tabIndex="1">
                                        {item[0]}
                                    </li>
                                    :
                                    <li className={styles.navBar__listItem}>
                                        <a className={styles.navBar__link} href={item[1]}>{item[0]}</a>
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