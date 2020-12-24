import styled from '@emotion/styled';

const FirstLevelList = styled.ul`

    list-style: none;
    align-items: center;
    padding: 9px 0 0 0;
    margin-right: 16px;
    display: inline-flex;
    vertical-align: top;
    transition: all .5s ease-in;
    box-sizing: border-box;
    justify-content: space-around;
    margin: 0;

    width: ${({props}) => props.custom_width};
    background-color: ${({props}) => props.custom_colors.background_color};
    box-shadow: inset 0px 9px 0px 0px ${({props}) => props.custom_colors.expand_color};

    @media (max-width: ${({props}) => props.mobile_breakpoint}) {
        box-shadow: inset 15px 0px 0px 0px ${({props}) => props.custom_colors.expand_color};
        flex-direction: column;
        width: 100% !important;
    }

`;

export default FirstLevelList;