import { ThemeProvider } from "styled-components";
import "../styles/globals.css";
import { LightTheme } from "../theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={LightTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
