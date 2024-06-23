import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
// import { ApplicationRoutes } from "./routes";
import dark from "./styles/themes/dark";
import { Layout } from "./components/Layouts/Layout";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      {/* <ApplicationRoutes /> */}
      <Layout/>
    </ThemeProvider>
  );
};

export default App;
