import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
    color: #020202;
    background-color: white;
    padding: 2em;
    font-size: 16px;
    margin: 0 auto;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    max-width: 1400px;
    
    font-family: "Bitter", serif;
    font-optical-sizing: auto;
}

.title {
    margin-bottom: 0;
    padding-bottom: 0;
}

.subtitle {
    margin-top: 0;
    padding-top: 0;
}

a {
    text-decoration: none;
    color: #020202;
    transition: all ease 0.5s;
    font-weight: 700;
}

a:hover {
    color: #525252;
}

`;

export default GlobalStyle;
