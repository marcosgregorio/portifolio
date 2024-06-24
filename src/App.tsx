import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
// import { ApplicationRoutes } from "./routes";
import dark from "./styles/themes/dark";
import { AppRoutes } from "./routes/app.routes";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <AppRoutes/>
    </ThemeProvider>
  );
};

export default App;
