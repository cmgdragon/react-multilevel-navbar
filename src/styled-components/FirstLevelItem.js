import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

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
    width: 100%;
    position: relative;
    text-align: center;
    text-decoration: unset;
    color: inherit;
    padding: ${({props}) => props.custom_padding};

    &:hover {
        cursor: pointer;
    }

    &:hover, &:focus-within {
        background-color: ${({props}) => props.custom_colors.expand_color};
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
        border-right: 1px solid ${({props}) => props.custom_colors.hover_color};
        border-top: 1px solid ${({props}) => props.custom_colors.hover_color};
    }
    
    &:hover > span::after, &:focus-within > span::after {
        transform: rotateZ(135deg);
    }

    &:hover > [data-navbar-group], &:focus-within > [data-navbar-group] {
        display: block !important;
        animation-name: ${expand};
        animation-duration: .5s;
    }

    @media (max-width: ${({props}) => props.mobile_breakpoint}px) {
        padding: .5rem 0;

    }

`;

export default FirstLevelItem;