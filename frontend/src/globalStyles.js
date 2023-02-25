// globalStyles.js
import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
    html{
        scroll-behavior: smooth;
    }
    body {
        /* font-family: "Work Sans", sans-serif; */
        background: #ffffff;
    }
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: "Work Sans", sans-serif;
    }
`;

export default GlobalStyle;