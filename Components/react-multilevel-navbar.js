import React from 'react';
import * as styles from './styles';

const ReactMultilevelNavbar = () => {

    return (
        <nav style={styles.navBar} id="multilevel-navbar">
            <div data-navbar="level1">
            <ul style={styles.navBar__list}>
                <li style={styles.navBar__listItem_firstLevel}><a href="#">Test1</a></li>
                <li style={styles.navBar__listItem_firstLevel}><a href="#">Test1</a></li>
                <li style={styles.navBar__listItem_firstLevel} data-navbar="nextlevel">
                    <div data-navbar="level2">
                        <ul style={styles.navBar__list}>
                            <li>
                                <a 
                                    style={styles.navBar__link}
                                    aria-label="hidedn" 
                                    href="#" 
                                    data-navbar="previouslevel">
                                Back
                                </a>
                            </li>
                            <li><a style={styles.navBar__link} href="#">Test2</a></li>
                        </ul>
                    </div>
                </li>
            </ul>
            </div>
        </nav>
    )

}

export default ReactMultilevelNavbar;