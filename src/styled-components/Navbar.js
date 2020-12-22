import styled from '@emotion/styled';
import { css } from '@emotion/react';

const Navbar = styled.nav`

    display: flex;
    justify-content: center;
    font-family: 'Raleway', sans-serif;

`;

export default Navbar;

export const getCustomNavbarCSS = custom_fontFamily => css`

    font-family: ${custom_fontFamily}

`;