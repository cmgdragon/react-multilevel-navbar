import styled from '@emotion/styled';
import { css } from '@emotion/react';

const GroupList = styled.div`

    padding: 16px 0;
    white-space: nowrap;
    overflow: hidden;
    opacity: 1;
    width: 250px;
    transition: all .5s;
    position: absolute;
    visibility: hidden;

    &:hover {
        display: block;
    }

    @media (max-width: 645px) {
        position: relative;
        margin: 1rem auto 0 auto;
    }

`;

export default GroupList;

export const getCustomGroupListCSS = (custom_colors, custom_padding, mobile_breakpoint) => css`

    background-color: ${custom_colors.background_color};
    box-shadow: -20px 4px 0px 4px ${custom_colors.expand_color};
    margin-top: ${custom_padding};

    @media (max-width: ${mobile_breakpoint}) {
        box-shadow: 0 0 0px 8px ${custom_colors.expand_color};
        border-left: 3px solid ${custom_colors.background_color};
        border-top: 3px solid ${custom_colors.background_color};
        background-color: ${custom_colors.background_color};
    }

`;