import React from 'react';
import * as styles from './styles';

const ReactMultilevelNavbar = () => {


    const changeGroupDimensions = ({currentTarget}, group) => {
        const groupElement = document.querySelector(`[data-navbar-group=${group}]`);

        const itemCurrentSizes = [...currentTarget.parentElement.childNodes].map(item => item.offsetWidth);
        const itemSizes = [...groupElement.childNodes].map(item => item.offsetWidth);

        const largestCurrentItem = itemCurrentSizes.reduce((prev, curr) => prev < curr ? curr : prev);
        const largestItem = itemSizes.reduce((prev, curr) => prev < curr ? curr : prev);

        groupElement.parentElement.style.width = `${largestItem}px`;

        const newScrollLeft = groupElement.parentElement.scrollLeft + largestCurrentItem + 16;

        
        let scrollAmount = 0;
        const scroll = setInterval(function() {

            groupElement.parentElement.scrollLeft += 1;
            
            scrollAmount += 1;
            if(scrollAmount >= newScrollLeft){
                clearInterval(scroll);
            }

        }, 7);

    }

    return (
        <nav style={styles.navBar} id="multilevel-navbar">
            <ul style={styles.navBar__list}>
                <li style={styles.navBar__listItem_firstLevel} data-navbar="item1"><a href="#">Level 1</a></li>
                <li style={styles.navBar__listItem_firstLevel} data-navbar="item2"><a href="#">Level 1</a></li>
                <li style={styles.navBar__listItem_firstLevel} data-navbar="item3">
                    Level 1


                    <div style={styles.navBar__groupList}>
                        <ul style={styles.navBar__list} data-navbar-group="group1">
                            <li style={styles.navBar__listItem} onClick={(event) => changeGroupDimensions(event, 'group2')}>
                                <a style={styles.navBar__link} href="#">Test2</a>
                            </li>
                        </ul>

                        <ul style={styles.navBar__list} data-navbar-group="group2">
                            <li style={styles.navBar__listItem}>
                                <a 
                                    
                                    style={styles.navBar__link}
                                    aria-label="hidedn" 
                                    href="#" 
                                    data-navbar="previouslevel">
                                Back
                                </a>
                            </li>
                            <li style={styles.navBar__listItem}><a style={styles.navBar__link} href="#">Test2fdsfsfsfsdfs</a></li>
                        </ul>
                    </div>


                </li>
            </ul>
        </nav>
    )

}

export default ReactMultilevelNavbar;