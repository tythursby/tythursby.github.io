import React from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import AppContainer from "./components/AppContainer";

const appTheme = {
  primary: "#F9FEFF",
  secondary: "#3655b3",
  buttonPrimary: "#2bc8be",
  skills: "#27d612"
};

const App = () => {
  return (
    <ThemeProvider theme={appTheme}>
      <AppContainer />
    </ThemeProvider>
  );
};

export default App;
