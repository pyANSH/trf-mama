// globalStyles.js
import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
    html{
        scroll-behavior: smooth;
    }
    body {
        /* font-family: "Work Sans", sans-serif; */
        background: #ffffff;
        /* transition: all 0.50s linear; */
    }
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: "Work Sans", sans-serif;
    }
`;

export default GlobalStyle;