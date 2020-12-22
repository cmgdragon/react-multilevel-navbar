import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { css } from '@emotion/react';

const expand = keyframes`

    from {
        max-height: 0;
    }
    to {
        max-height: 100vh;
    }

`;

const FirstLevelItem = styled.li`

    font-size: 1.2rem;
    outline: none;
    flex: 1;
    position: relative;
    text-align: center;
    text-decoration: unset;
    color: inherit;

    &:hover {
        cursor: pointer;
    }

    &:hover > [data-navbar-group], &:focus-within > [data-navbar-group] {
        display: block !important;
        animation-name: ${expand};
        animation-duration: .5s;
    }

    a {
        text-align: center;
        padding: 0;
    }

    &>span::after {
        content: '';
        width: 15px;
        margin-left: 1.2rem;
        margin-top: .5rem;
        height: 15px;
        display: inline-block;
        transform: rotateZ(-45deg);
        transition: transform .5s;
        top: 40%;
    }
    
    &:hover > span::after, &:focus-within > span::after {
        transform: rotateZ(135deg);
    }

    @media (max-width: 645px) {
        padding: .5rem 0;
    }

`;

export default FirstLevelItem;

export const getCustomFirstLevelItemCSS = (custom_padding, custom_colors) => css`

    padding: ${custom_padding};

    &:hover, &:focus-within {
        background-color: ${custom_colors.expand_color};
    }

    &>span::after {
        border-right: 1px solid ${custom_colors.hover_color};
        border-top: 1px solid ${custom_colors.hover_color};
    }

`;