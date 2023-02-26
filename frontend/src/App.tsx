import React from "react";
// import { useSelector, useDispatch } from 'react-redux';
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import GlobalStyle from "./globalStyles";
import { lightThemeColorScheme } from "./config/styles";
import { ThemeProvider } from "styled-components";

function App() {
  // const counter: number = useSelector((state: any) => state.test.counter);
  // const dispatch: any = useDispatch();
  return (
    <ThemeProvider theme={lightThemeColorScheme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
