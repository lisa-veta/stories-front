import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { Router } from "./Router";
import { StyleSheetManager } from "./StyleSheetManager";
import { lightTheme } from "./Themes";

export const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <StyleSheetManager>
        <GlobalStyle />
        <Router />
      </StyleSheetManager>
    </ThemeProvider>
  );
};
