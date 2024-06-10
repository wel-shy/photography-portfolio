import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
    color: #020202;
    background-color: white;
    padding: 1em;
    font-size: 16px;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.title {
    margin-bottom: 0;
    padding-bottom: 0;
}

.subtitle {
    margin-top: 0;
    padding-top: 0;
}

`;

export default GlobalStyle;
