import React, { useEffect } from 'react';
import NavbarList from './navbar-list';
import * as styles from './styles';
import './test.module.css';

const NavbarGroup = ({ levelGroup }) => {

    const extractSubLevels = levelGroup => {
        const navbarLevels = [];

        let i = 0;
        const extractLevels = levelGroup => {
            navbarLevels[++i] = [];
            for (const [levelName, value] of Object.entries(levelGroup)) {
                if (typeof value === 'object') {
                    navbarLevels[i].push([levelName, 'next']);
                    extractLevels(value);
                }
                else navbarLevels[i].push([levelName, value]);
            }
        }

        extractLevels(levelGroup);

        return navbarLevels;

    }

    return (
        <div style={styles.navBar__groupList} data-navbar-group>
            {
                extractSubLevels(levelGroup).map((groupList, index) => {
                    console.log(extractSubLevels(levelGroup))
                    return (
                        <NavbarList key={index} levelList={groupList} />
                    )
                })
            }
            {/*
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
            */}
        </div>
    )
}

export default NavbarGroup;