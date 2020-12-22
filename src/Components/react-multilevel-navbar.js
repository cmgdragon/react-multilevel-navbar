import React, { useEffect } from 'react';
import NavbarGroup from './Navbar-group';
import NavBar, { getCustomNavbarCSS } from '../styled-components/Navbar';
import FirstLevelList, { getCustomFirstLevelListCSS } from '../styled-components/FirstLevelList';
import FirstLevelItem, { getCustomFirstLevelItemCSS } from '../styled-components/FirstLevelItem';
import LevelLink from '../styled-components/LevelLink';

const ReactMultilevelNavbar = ({model, custom_width, custom_padding, 
    custom_colors, custom_fontFamily, mobile_breakpoint}) => {

    useEffect(() => {
  
        const allGroups = document.querySelectorAll('[data-navbar-group]');

        allGroups.forEach(group => {

            const allItemsWidthFirstLevel = [...group.firstElementChild.childNodes]
                .filter(node => node.localName === 'li')
                .map(item => item.offsetWidth);

            const largestItemFirstLevel = allItemsWidthFirstLevel
                .reduce((prev, curr) => prev < curr ? curr : prev);

            const fistLevelWidth = largestItemFirstLevel >= 200 ? 200 : largestItemFirstLevel;

            group.style.width = `${fistLevelWidth}px`;
            group.style.visibility = 'visible';
            group.style.display = 'none';

        });

    }, []);

    return (
        <NavBar id="multilevel-navbar" css={getCustomNavbarCSS(custom_fontFamily)}>
            <FirstLevelList css={getCustomFirstLevelListCSS(custom_width, custom_colors, mobile_breakpoint)}>
                {
                    Object.entries(model).map((level, index) => {
                        return (
                            <React.Fragment key={index}>
                                {
                                    typeof level[1] === 'object' ?
                                        <FirstLevelItem
                                         css={getCustomFirstLevelItemCSS(custom_padding, custom_colors)}
                                         tabIndex="1"
                                         data-navbar-hasgroup>
                                            <span>{level[0]}</span>
                                            <NavbarGroup 
                                                levelGroup={level[1]} 
                                                custom_colors={custom_colors} 
                                                custom_padding={custom_padding}
                                                mobile_breakpoint={mobile_breakpoint}
                                            />
                                        </FirstLevelItem>
                                        :
                                        <FirstLevelItem 
                                         css={getCustomFirstLevelItemCSS(custom_padding, custom_colors)}
                                         tabIndex="1">
                                            <LevelLink tabIndex="-1" href={level[1]}>{level[0]}</LevelLink>
                                        </FirstLevelItem>
                                }
                            </React.Fragment>
                        )
                    })
                }
            </FirstLevelList>
        </NavBar>
    )

}

ReactMultilevelNavbar.defaultProps = {
    custom_width: '100%',
    custom_padding: '1.5rem',
    custom_fontFamily: 'Raleway, sans-serif',
    mobile_breakpoint: '645px',
    custom_colors: {
        background_color: 'rgb(240, 238, 238)',
        expand_color: 'rgb(255, 190, 190)',
        hover_color: 'black',
        constrast_color: 'white'
    }
}

export default ReactMultilevelNavbar;