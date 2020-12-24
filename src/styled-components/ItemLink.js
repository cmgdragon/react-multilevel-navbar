import styled from '@emotion/styled';

const ItemLink = styled.a`

    text-decoration: unset;
    color: inherit;
    outline: none;
    display: block;
    box-sizing: border-box;
    white-space: normal;
    height: 100%;
    width: 100%;

    text-align: ${({firstlevel}) => firstlevel ? 'center' : 'start'};

    padding: ${({firstlevel, props}) => firstlevel ? props.custom_padding
                    : '.5rem 16px'};

    font-size: ${({firstlevel}) => firstlevel ? '1.2rem' : 'initial'};
    
    flex: ${({firstlevel}) => firstlevel ? '1' : 'unset'};
    
    &:hover, &:focus {
        background-color: ${({firstlevel, props}) => firstlevel ? props.custom_colors.expand_color
                    : props.custom_colors.hover_color};

        color: ${({firstlevel, props}) => firstlevel ? props.custom_colors.hover_color
                    : props.custom_colors.contrast_color};
    }

    @media (max-width: ${({props}) => props.mobile_breakpoint}) {
        padding: .5rem 16px;
    }

`;

export default ItemLink;