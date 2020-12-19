import React, { useEffect } from 'react';
import NavbarGroup from './navbar-group';
import * as styles from './styles';
import model from '../navbar-model';
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

    return (
        <nav style={styles.navBar} id="multilevel-navbar">
            <ul style={styles.navBar__list}>

                {
                    Object.entries(model).map((level, index) => {
                        return (
                            <React.Fragment key={index}>
                                {
                                    typeof level[1] === 'object' ?
                                        <li style={styles.navBar__listItem_firstLevel}>
                                            {level[0]}
                                            <NavbarGroup levelGroup={level} />
                                        </li>
                                        :
                                        <li style={styles.navBar__listItem_firstLevel}>
                                            <a style={styles.navBar__link} href={level[1]}>{level[0]}</a>
                                        </li>
                                }
                            </React.Fragment>
                        )
                    })
                }
                {/*
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
 */}
            </ul>
        </nav>
    )

}

export default ReactMultilevelNavbar;