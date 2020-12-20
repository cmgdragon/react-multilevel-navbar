import React from 'react';
import NavbarList from './navbar-list';
import styles from '../Styles/styles.module.css';

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
        <div className={styles.navBar__groupList} data-navbar-group>
            {
                extractSubLevels(levelGroup).map((groupList, index) => {
                    return (
                        <NavbarList key={index} levelList={groupList} isFirstSubLevel={index === 1 ? true : false} />
                    )
                })
            }
        </div>
    )
}

export default NavbarGroup;