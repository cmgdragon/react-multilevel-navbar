import React, { useEffect } from 'react';
import * as styles from './styles';
import './test.module.css';

const ReactMultilevelNavbar = () => {

    useEffect(() => {
        const allGroups = document.querySelectorAll('[data-navbar-group]');

        allGroups.forEach(group => {
            const allItemSizesFirstLevel = [...group.firstElementChild.childNodes]
                .map(item => item.offsetWidth);

            const largestItemFirstLevel = allItemSizesFirstLevel
                .reduce((prev, curr) => prev < curr ? curr : prev);

            group.style.width = `${largestItemFirstLevel}px`;
            const itemCount = allItemSizesFirstLevel.length;
            group.style.height = `${(16 * itemCount) + (8 * itemCount) + 8}px`;
            group.style.visibility = 'visible';
            group.style.display = 'none';

        });

    }, []);

    const changeGroup = ({ currentTarget }, isPrevious) => {

        const groupElement = isPrevious ? currentTarget.parentElement.previousElementSibling :
            currentTarget.parentElement.nextElementSibling;

        groupElement.parentElement.style.display = 'block';

        const itemCurrentSizes = [...currentTarget.parentElement.childNodes].map(item => item.offsetWidth);
        const itemCount = groupElement.childNodes.length;
        const itemSizes = [...groupElement.childNodes].map(item => item.offsetWidth);

        const largestCurrentItem = itemCurrentSizes.reduce((prev, curr) => prev < curr ? curr : prev);
        const largestItem = itemSizes.reduce((prev, curr) => prev < curr ? curr : prev);

        groupElement.parentElement.style.width = `${largestItem}px`;
        groupElement.parentElement.style.height = `${(16 * itemCount) + (8 * itemCount) + 8}px`;

       let newScrollLeft;
       if (isPrevious) {
            newScrollLeft = largestItem + 16;
       } else {
            newScrollLeft = largestCurrentItem + (16 * 2) - 16;
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
        <nav style={styles.navBar} id="multilevel-navbar">
            <ul style={styles.navBar__list}>
                <li style={styles.navBar__listItem_firstLevel}>
                    Level 1




                </li>
                <li style={styles.navBar__listItem_firstLevel}><a href="#">Level 2</a></li>
                <li style={styles.navBar__listItem_firstLevel}>
                    Level 3


                    <div style={styles.navBar__groupList} data-navbar-group>
                        <ul style={styles.navBar__list}>
                            <li style={styles.navBar__listItem} onClick={(event) => changeGroup(event, false)}>
                                <a style={styles.navBar__link} href="#">Test2</a>
                            </li>
                        </ul>

                        <ul style={styles.navBar__list}>
                            <li style={styles.navBar__listItem} onClick={(event) => changeGroup(event, true)}>
                                <a
                                    style={styles.navBar__link}
                                    aria-label="hidedn"
                                    href="#"
                                    data-navbar="previouslevel">
                                    Back
                                </a>
                            </li>
                            <li style={styles.navBar__listItem} onClick={(event) => changeGroup(event, false)}>
                                <a style={styles.navBar__link} href="#">Test2fdsfsfsfsdfs</a>
                            </li>
                        </ul>


                        <ul style={styles.navBar__list}>
                            <li style={styles.navBar__listItem} onClick={(event) => changeGroup(event, true)}>
                                <a
                                    style={styles.navBar__link}
                                    aria-label="hidedn"
                                    href="#"
                                    data-navbar="previouslevel">
                                    Back
                                </a>
                            </li>
                            <li style={styles.navBar__listItem}><a style={styles.navBar__link} href="#">esto va o qué JODER</a></li>
                            <li style={styles.navBar__listItem}><a style={styles.navBar__link} href="#">PUES AHORA VEREMOS</a></li>
                            <li style={styles.navBar__listItem}><a style={styles.navBar__link} href="#">si va o no</a></li>
                        </ul>


                    </div>


                </li>
            </ul>
        </nav>
    )

}

export default ReactMultilevelNavbar;