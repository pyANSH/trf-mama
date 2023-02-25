import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./Store/Reducers/TestReducer";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { router } from "./routes";
import { lightThemeColorScheme } from "./config/styles";
import { ThemeProvider } from "styled-components";

function App() {

  const counter: number = useSelector((state: any) => state.test.counter);
  const dispatch: any = useDispatch();
  return (
    <ThemeProvider theme={lightThemeColorScheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
