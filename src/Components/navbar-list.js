import React from 'react';
import * as styles from './styles';
import './test.module.css';

const NavbarList = ({ levelList }) => {

    const changeGroup = ({ currentTarget }, isPrevious) => {

        const groupElement = isPrevious ? currentTarget.parentElement.previousElementSibling :
            currentTarget.parentElement.nextElementSibling;

        groupElement.parentElement.style.display = 'block';

        const itemCurrentSizes = [...currentTarget.parentElement.childNodes].map(item => item.offsetWidth);
        const itemCount = groupElement.childNodes.length;
        const itemSizes = [...groupElement.childNodes].map(item => item.offsetWidth);

        const largestCurrentItem = itemCurrentSizes.reduce((prev, curr) => prev < curr ? curr : prev);
        const largestItem = itemSizes.reduce((prev, curr) => prev < curr ? curr : prev);

        groupElement.parentElement.style.width = `${largestItem}px`;
        groupElement.parentElement.style.height = `${(16 * itemCount) + (8 * itemCount) + 8}px`;

        let newScrollLeft;
        if (isPrevious) {
            newScrollLeft = largestItem + 16;
        } else {
            newScrollLeft = largestCurrentItem + (16 * 2) - 16;
        }

        let scrollAmount = 0;
        const scroll = setInterval(function () {

            if (isPrevious) {
                groupElement.parentElement.scrollLeft -= 1;
            } else {
                groupElement.parentElement.scrollLeft += 1;
            }

            scrollAmount += 1;
            if (scrollAmount >= newScrollLeft) {
                groupElement.parentElement.style.display = 'none';
                clearInterval(scroll);
            }

        }, 5);

    }


    return (
        <ul style={styles.navBar__list}>
            {
                levelList.map((item, index) => {
                    console.log(levelList)
                    return (
                        <React.Fragment key={index}>
                            { index !== 0 ? '' :
                                <li key={index} style={styles.navBar__listItem} onClick={(event) => changeGroup(event, true)}>
                                    <a
                                        style={styles.navBar__link}
                                        aria-label="hidedn"
                                        href="#"
                                        data-navbar="previouslevel">
                                        tst
                                    </a>
                                </li>
                            }
                            {
                                item[1] === 'next' ?

                                    <li style={styles.navBar__listItem} onClick={(event) => changeGroup(event, false)}>
                                        {item[0]}
                                    </li>
                                    :
                                    <li style={styles.navBar__listItem}>
                                        <a style={styles.navBar__link} href={item[1]}>{item[0]}</a>
                                    </li>
                            }
                        </React.Fragment>
                    )
                })
            }

        </ul>
    )
}

export default NavbarList;