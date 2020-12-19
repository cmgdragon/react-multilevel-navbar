import React, { useEffect } from 'react';
import * as styles from './styles';
import model from '../navbar-model';
import './test.module.css';

const NavbarGroup = ({group}) => {

    const extractSubLevels = level => {
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

        extractLevels(level);

        return navbarLevels;

    }

    return (
        <>
        {
            Object.entries(group).map((group, index) => {
                return (
                    <>
                    
                    </>
                )
            })
        }
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
    </>
    )
}