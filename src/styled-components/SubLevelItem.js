import styled from '@emotion/styled';

const SubLevelItem = styled.li`

    padding: .5rem 16px;
    box-sizing: border-box;
    white-space: normal;
    outline: none;
    height: 100%;
    text-align: start;
    position: relative;

    &:hover, &:focus {
        background-color: ${({props}) => props.custom_colors.hover_color};
        color: white;
    }

`;

export default SubLevelItem;