import React from 'react';
import * as styles from './styles';

const ReactMultilevelNavbar = () => {


    const changeGroup = ({ currentTarget }, isPrevious, groupNumber) => {

        const groupElement = isPrevious ? currentTarget.parentElement.previousElementSibling :
            currentTarget.parentElement.nextElementSibling;

        const itemCurrentSizes = [...currentTarget.parentElement.childNodes].map(item => item.offsetWidth);
        const itemCount = groupElement.childNodes.length;
        const itemSizes = [...groupElement.childNodes].map(item => item.offsetWidth);

        const largestCurrentItem = itemCurrentSizes.reduce((prev, curr) => prev < curr ? curr : prev);
        const largestItem = itemSizes.reduce((prev, curr) => prev < curr ? curr : prev);

        groupElement.parentElement.style.width = `${largestItem - (groupNumber == 1 ? 0 : 8)}px`;
        groupElement.parentElement.style.height = `${(16 * itemCount) + (8 * itemCount) + 8}px`;

        const newScrollLeft = groupElement.parentElement.scrollLeft + largestCurrentItem + (16 * groupNumber);
        let scrollAmount = groupElement.parentElement.scrollLeft;
        const scroll = setInterval(function () {

            if (isPrevious) {
                groupElement.parentElement.scrollLeft -= 1;
            } else {
                groupElement.parentElement.scrollLeft += 1;
            }


            scrollAmount += 1;
            if (scrollAmount >= newScrollLeft) {
                clearInterval(scroll);
            }

        }, 5);

    }

    return (
        <nav style={styles.navBar} id="multilevel-navbar">
            <ul style={styles.navBar__list}>
                <li style={styles.navBar__listItem_firstLevel} data-navbar="item1"><a href="#">Level 1</a></li>
                <li style={styles.navBar__listItem_firstLevel} data-navbar="item2"><a href="#">Level 1</a></li>
                <li style={styles.navBar__listItem_firstLevel} data-navbar="item3">
                    Level 1


                    <div style={styles.navBar__groupList}>
                        <ul style={styles.navBar__list} data-navbar-group="group1">
                            <li style={styles.navBar__listItem} onClick={(event) => changeGroup(event, false, 2)}>
                                <a style={styles.navBar__link} href="#">Test2</a>
                            </li>
                        </ul>

                        <ul style={styles.navBar__list} data-navbar-group="group2">
                            <li style={styles.navBar__listItem} onClick={(event) => changeGroup(event, true, 1)}>
                                <a
                                    style={styles.navBar__link}
                                    aria-label="hidedn"
                                    href="#"
                                    data-navbar="previouslevel">
                                    Back
                                </a>
                            </li>
                            <li style={styles.navBar__listItem} onClick={(event) => changeGroup(event, false, 3)}>
                                <a style={styles.navBar__link} href="#">Test2fdsfsfsfsdfs</a>
                            </li>
                        </ul>


                        <ul style={styles.navBar__list} data-navbar-group="group2">
                            <li style={styles.navBar__listItem} onClick={(event) => changeGroup(event, true, 2)}>
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