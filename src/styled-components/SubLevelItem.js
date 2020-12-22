import styled from '@emotion/styled';
import { css } from '@emotion/react';

const SubLevelItem = styled.li`

    padding: .5rem 16px;
    box-sizing: border-box;
    white-space: pre-wrap;
    outline: none;
    height: 100%;
    text-align: start;
    position: relative;

`;

export default SubLevelItem;

export const getCustomSubLevelItemCSS = custom_colors => css`

    &:hover, &:focus {
        background-color: ${custom_colors.hover_color};
        color: white;
    }

`;