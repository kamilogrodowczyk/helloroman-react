import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    html {
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }

    *, *::after, *::before {
        box-sizing: inherit;
    }

    body {
        font-family: 'Montserrat', sans-serif;
    }

    a, button {
        font-family: 'Montserrat', sans-serif;
    }
`;
