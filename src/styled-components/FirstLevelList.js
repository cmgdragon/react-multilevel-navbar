import styled from '@emotion/styled';
import { css } from '@emotion/react';

const FirstLevelList = styled.ul`

    list-style: none;
    padding: 9px 0 0 0;
    margin-right: 16px;
    display: inline-flex;
    vertical-align: top;
    transition: all .5s ease-in;
    box-sizing: border-box;
    justify-content: space-around;
    margin: 0;
    


`;

export default FirstLevelList;

export const getCustomFirstLevelListCSS = (custom_width, custom_colors, mobile_breakpoint) => css`

    width: ${custom_width};
    background-color: ${custom_colors.background_color};
    box-shadow: inset 0px 9px 0px 0px ${custom_colors.expand_color};

    @media (max-width: ${mobile_breakpoint}) {
        flex-direction: column;
        width: 100% !important;
    }

`;