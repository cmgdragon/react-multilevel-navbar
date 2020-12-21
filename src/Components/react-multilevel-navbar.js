import React, { useEffect } from 'react';
import NavbarGroup from './navbar-group';
import model from '../navbar-model';
import styles from '../Styles/styles.module.css';

const ReactMultilevelNavbar = () => {

    useEffect(() => {
  
        const allGroups = document.querySelectorAll('[data-navbar-group]');

        allGroups.forEach(group => {

            const allItemsWidthFirstLevel = [...group.firstElementChild.childNodes]
                .filter(node => node.localName === 'li')
                .map(item => item.offsetWidth);

            const allItemsWHeightFirstLevel = [...group.firstElementChild.childNodes]
            .filter(node => node.localName === 'li')
            .map(item => item.offsetHeight)
            .reduce((prev, curr) => curr + prev);

            const largestItemFirstLevel = allItemsWidthFirstLevel
                .reduce((prev, curr) => prev < curr ? curr : prev);

            const fistLevelWidth = largestItemFirstLevel >= 200 ? 200 : largestItemFirstLevel;

            group.style.width = `${fistLevelWidth}px`;
            const itemCount = allItemsWidthFirstLevel.length;
            //group.style.height = `${group.firstElementChild.offsetHeight}px`;
            group.style.visibility = 'visible';
            group.style.display = 'none';

        });

    }, []);

    return (
        <nav className={styles.navBar} id="multilevel-navbar">
            <ul className={styles.navBar__firstLevelList}>
                {
                    Object.entries(model).map((level, index) => {
                        return (
                            <React.Fragment key={index}>
                                {
                                    typeof level[1] === 'object' ?
                                        <li className={styles.navBar__listItem_firstLevel} tabIndex="1">
                                            {level[0]}
                                            <NavbarGroup levelGroup={level[1]} />
                                        </li>
                                        :
                                        <li className={styles.navBar__listItem_firstLevel} tabIndex="1">
                                            <a tabIndex="-1" className={styles.navBar__link} href={level[1]}>{level[0]}</a>
                                        </li>
                                }
                            </React.Fragment>
                        )
                    })
                }
            </ul>
        </nav>
    )

}

export default ReactMultilevelNavbar;