// Core
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyles = createGlobalStyle`
    ${reset};

    * {
        box-sizing: border-box;
    }

    h1 { font-size: 36px }
    h2 { font-size: 28px }
    h3 { font-size: 22px }
    h4 { font-size: 18px }
    h5 { font-size: 16px }
    h6 { font-size: 14px }
`;
