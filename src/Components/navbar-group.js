import React from 'react';
import NavbarList from './Navbar-list';
import GroupList, { getCustomGroupListCSS } from '../styled-components/GroupList';

const NavbarGroup = ({ levelGroup, custom_colors, custom_padding, mobile_breakpoint }) => {

    const extractSubLevels = levelGroup => {

        const navbarLevels = [];
        let i = 0;

        const extract = (levelGroup, belongsTo) => {

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
            saved.forEach(([levelName, belongsTo]) => extract(levelName, belongsTo));
        }

        extract(levelGroup, 1);

        return navbarLevels;

    }

    return (
        <GroupList css={getCustomGroupListCSS(custom_colors, custom_padding, mobile_breakpoint)} data-navbar-group>
            {
                extractSubLevels(levelGroup).map(([groupList, belongsTo], index) => {
                    return (
                        <NavbarList 
                            key={index} 
                            levelList={groupList} 
                            belongsTo={belongsTo} 
                            isFirstSubLevel={index === 1 ? true : false} 
                            custom_colors={custom_colors}
                        />
                    )
                })
            }
        </GroupList>
    )
}

export default NavbarGroup;