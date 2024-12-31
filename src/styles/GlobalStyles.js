import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.creationContainer {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  }`

export default GlobalStyles;