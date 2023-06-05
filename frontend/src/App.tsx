import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import GlobalStyle from './globalStyles';
import { lightThemeColorScheme } from './config/styles';
import { ThemeProvider } from 'styled-components';
import { CookiesProvider, useCookies } from 'react-cookie';
import { initAPI } from './serverCom';
import { useDispatch, useSelector } from 'react-redux';
import { _getUserDetails } from './Store/Thunk/users';

function App() {

	// const counter: number = useSelector((state: any) => state.test.counter);
	// const dispatch: any = useDispatch();
	const [cookies, setCookie] = useCookies(); 
	const dispatch:any =useDispatch();

	if(cookies?.token){
		initAPI({token:cookies?.token});
		dispatch(_getUserDetails({token:cookies?.token}));
	}


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
