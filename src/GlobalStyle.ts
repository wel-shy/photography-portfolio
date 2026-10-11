import { DefaultTheme, createGlobalStyle, css } from 'styled-components';
import { DarkTheme, LightTheme } from './theme';

const themeVariables = (theme: DefaultTheme) => css`
  --background-color: ${theme.backgroundColor};
  --text-color: ${theme.text.color};
`;

// The theme is applied in CSS so prerendered pages have the right colours before
// any JavaScript has run
const GlobalStyle = createGlobalStyle`
:root {
    ${themeVariables(LightTheme)}
}

@media (prefers-color-scheme: dark) {
    :root {
        ${themeVariables(DarkTheme)}
    }
}

/* Set by the theme toggle, which overrides the system preference */
:root[data-theme='light'] {
    ${themeVariables(LightTheme)}
}

:root[data-theme='dark'] {
    ${themeVariables(DarkTheme)}
}

body {
    color: var(--text-color);
    background-color: var(--background-color);
    padding: 2em;
    
    margin: 0 auto;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    max-width: 1400px;
    
    font-family: "Bitter Variable", serif;
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
    color: var(--text-color);
    transition: all ease 0.5s;
    font-weight: 700;
}

a:hover {
    color: #525252;
}

`;

export default GlobalStyle;
