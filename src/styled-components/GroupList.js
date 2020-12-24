import styled from '@emotion/styled';

const GroupList = styled.div`

    padding: 16px 0;
    white-space: nowrap;
    overflow: hidden;
    opacity: 1;
    width: 250px;
    transition: all .5s;
    position: absolute;
    visibility: hidden;
    background-color: ${({props}) => props.custom_colors.background_color};
    box-shadow: -20px 4px 0px 4px ${({props}) => props.custom_colors.expand_color};
    margin-top: ${({props}) => props.custom_padding};

    @media (max-width: ${({props}) => props.mobile_breakpoint}) {
        position: relative;
        margin: 1rem auto 0 auto;
        box-shadow: inset 1px 1px 0px 1px ${({props}) => props.custom_colors.expand_color};
        border-left: 3px solid ${({props}) => props.custom_colors.background_color};
        border-top: 3px solid ${({props}) => props.custom_colors.background_color};
        background-color: ${({props}) => props.custom_colors.background_color};
    }

`;

export default GroupList;