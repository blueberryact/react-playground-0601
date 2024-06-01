import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  // Reset CSS
  ${reset}
  
  * {
    box-sizing: border-box;
    font-family: "Noto Sans KR", Arial, Helvetica, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

`;

export default GlobalStyle;
