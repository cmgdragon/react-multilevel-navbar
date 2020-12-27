import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import NavbarGroup from './navbar-group';
import NavBar from '../styled-components/Navbar';
import FirstLevelList from '../styled-components/FirstLevelList';
import FirstLevelItem from '../styled-components/FirstLevelItem';
import ItemLink from '../styled-components/ItemLink';

const ReactMultilevelNavbar = ({model, ...props}) => {

    props.custom_colors = {
        background_color: 'rgb(240, 238, 238)',
        expand_color: 'rgb(255, 190, 190)',
        hover_color: 'black',
        contrast_color: 'white',
        ...props.custom_colors
    }

    const customcss = props;

    useEffect(() => {
  
        const allGroups = document.querySelectorAll('[data-navbar-group]');

        allGroups.forEach(group => {

            const allItemsWidthFirstLevel = [...group.firstElementChild.childNodes]
                .filter(node => node.nodeName !== '#text')
                .map(item => item.offsetWidth);

            const largestItemFirstLevel = allItemsWidthFirstLevel
                .reduce((prev, curr) => prev < curr ? curr : prev);

            const fistLevelWidth = largestItemFirstLevel >= 200 ? 200 : largestItemFirstLevel;
            group.style.width = `${fistLevelWidth}px`;
            
            setTimeout(() => {
                group.style.height = `${group.firstElementChild.offsetHeight}px`;
                group.style.visibility = 'visible';
                group.style.display = 'none';
            }, 500);

        });

    }, []);

    return (
        <NavBar props={customcss} id="multilevel-navbar">
            <FirstLevelList props={customcss}>
                {
                    Object.entries(model).map(([levelName, value], index) => {
                        return (
                            <React.Fragment key={index}>
                                {
                                    typeof value === 'object' ?
                                    <FirstLevelItem 
                                        props={customcss}
                                        tabIndex={1}
                                        data-navbar-hasgroup
                                        >
                                        <span>{levelName}</span>
                                        <NavbarGroup 
                                            levelGroup={value} 
                                            customcss={customcss}
                                        />
                                    </FirstLevelItem>
                                    :
                                    <ItemLink 
                                        firstlevel
                                        tabIndex={1}
                                        onTouchStart={({currentTarget}) => currentTarget.click()}
                                        href={value}
                                        props={customcss}>
                                            {levelName}
                                    </ItemLink>
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
    mobile_breakpoint: 645,
}

ReactMultilevelNavbar.propTypes = {
    model: PropTypes.object,
    custom_width: PropTypes.string,
    custom_padding: PropTypes.string,
    custom_fontFamily: PropTypes.string,
    mobile_breakpoint: PropTypes.number,
    custom_colors: PropTypes.objectOf(PropTypes.string)
}

export default ReactMultilevelNavbar;
