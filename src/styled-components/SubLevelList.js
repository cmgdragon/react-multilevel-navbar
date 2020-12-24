import styled from '@emotion/styled';

const SubLevelList = styled.ul`

    list-style: none;
    padding: 0;
    margin-right: 16px;
    display: inline-block;
    vertical-align: top;
    transition: all .5s ease-in;
    box-sizing: border-box;
    display: inline-table;
    font-size: 1rem;
    width: 100%;

    [data-navbar-back]::before {
        content: '';
        width: 12px;
        height: 12px;
        display: inline-block;
        transform: rotateZ(45deg);
        border-left: 1px solid ${({props}) => props.custom_colors.hover_color};
        border-bottom: 1px solid ${({props}) => props.custom_colors.hover_color};
    }
    
    [data-navbar-partof]::after {
        content: '';
        width: 10px;
        margin-left: 1.2rem;
        height: 10px;
        display: inline-block;
        transform: rotateZ(45deg);
        border-right: 1px solid ${({props}) => props.custom_colors.hover_color};
        border-top: 1px solid ${({props}) => props.custom_colors.hover_color};
    }

    [data-navbar-back]:hover::before, [data-navbar-back]:focus::before {
        border-left: 1px solid ${({props}) => props.custom_colors.contrast_color};
        border-bottom: 1px solid ${({props}) => props.custom_colors.contrast_color};
    }

    [data-navbar-partof]:hover::after, [data-navbar-partof]:focus::after {
        border-right: 1px solid ${({props}) => props.custom_colors.contrast_color};
        border-top: 1px solid ${({props}) => props.custom_colors.contrast_color};
    }
    
`;

export default SubLevelList;