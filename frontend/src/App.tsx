<<<<<<< HEAD
import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import {RouterProvider} from 'react-router-dom';
import { router } from './routes';
import GlobalStyle from './globalStyles';
import { lightThemeColorScheme } from './config/styles';
import { ThemeProvider } from 'styled-components';

function App() {

	// const counter: number = useSelector((state: any) => state.test.counter);
	// const dispatch: any = useDispatch();
	return (
		<ThemeProvider theme={lightThemeColorScheme}>
			<GlobalStyle />
			<RouterProvider router={router} />
		</ThemeProvider>
	);
=======
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./Store/Reducers/TestReducer";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { router } from "./routes";

function App() {

  const counter: number = useSelector((state: any) => state.test.counter);
  const dispatch: any = useDispatch();
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
>>>>>>> b98104a334bd3aed39126dfc4ce5f29badf97216
}

export default App;
