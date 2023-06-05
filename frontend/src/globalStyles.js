// globalStyles.js
import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
html {
  scroll-behavior: smooth;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  padding: 0;
  margin: 0;
  letter-spacing: -0.06em; //added this here because it was present in the index.css file
   /* font-family: "Work Sans", sans-serif; */
   background: #ffffff;
        /* transition: all 0.50s linear; */
}
*{
	box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Work Sans", sans-serif;

  ::selection {
    background-color: #8330c2;
    color: #ffffff;
  }
}
button:focus-visible{
	outline:none;
}
/* Works on Firefox */
* {
  scrollbar-width: thin !important;
  scrollbar-color: #BCBCBC rgba(0,0,0,0) !important;
}

/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 0.25rem !important;
}

*::-webkit-scrollbar-track {
  background: rgba(0,0,0,0) !important;
}

*::-webkit-scrollbar-thumb {
  background-color: #BCBCBC !important;
  border-radius: 0.75rem !important;
}

*::-webkit-scrollbar-corner {
  background: #BCBCBC !important;
  border-radius: 0.75rem !important;
}
`;

export default GlobalStyle;
