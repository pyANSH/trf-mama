import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import GlobalStyle from './globalStyles';
import { lightThemeColorScheme } from './config/styles';
import { ThemeProvider } from 'styled-components';
import { CookiesProvider } from "react-cookie";

function App() {

	// const counter: number = useSelector((state: any) => state.test.counter);
	// const dispatch: any = useDispatch();
	return (
		<CookiesProvider>
		<ThemeProvider theme={lightThemeColorScheme}>
			<GlobalStyle />
			<RouterProvider router={router} />
		</ThemeProvider>
		</CookiesProvider>
	);
}

export default App;
