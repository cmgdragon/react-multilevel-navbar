import React from 'react';
import NavbarList from './navbar-list';
import styles from '../Styles/styles.module.css';

const NavbarGroup = ({ levelGroup }) => {

    const extractSubLevels = levelGroup => {

        const navbarLevels = [];
        let i = 0;

        const extractLevels = (levelGroup, belongsTo) => {

            navbarLevels[++i] = [[], ''];
            let saved = [];
            const subLevels = Object.entries(levelGroup);

            navbarLevels[i][1] = `level${belongsTo}`;
            for (const [levelName, value] of subLevels) {

                if (typeof value === 'object') {
                    saved.push([value, belongsTo]);
                    navbarLevels[i][0].push([levelName, 'next', `level${belongsTo}`]);
                    
                } else {
                    navbarLevels[i][0].push([levelName, value, i===1?`level${belongsTo}`:'']);
                }
                if (i === 1) belongsTo++;
            }
            saved.forEach(([levelName, belongsTo]) => extractLevels(levelName, belongsTo));
        }

        extractLevels(levelGroup, 1);

        return navbarLevels;

    }

    return (
        <div className={styles.navBar__groupList} data-navbar-group>
            {
                extractSubLevels(levelGroup).map(([groupList, belongsTo], index) => {
                    return (
                        <NavbarList key={index} levelList={groupList} belongsTo={belongsTo} isFirstSubLevel={index === 1 ? true : false} />
                    )
                })
            }
        </div>
    )
}

export default NavbarGroup;