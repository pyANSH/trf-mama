import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import {RouterProvider} from 'react-router-dom';
import { router } from './routes';
import GlobalStyle from './globalStyles';
import { lightThemeColorScheme } from './config/styles';
import { ThemeProvider } from 'styled-components';
import { Scrollbars } from 'react-custom-scrollbars';


function App() {

	// const counter: number = useSelector((state: any) => state.test.counter);
	// const dispatch: any = useDispatch();
	return (
		<Scrollbars 
			autoHide
			style={{ width: '100vw', height: '100vh' }}
			autoHideTimeout={1000}
			autoHideDuration={200}
			thumbMinSize={10}
			renderThumbVertical={({ style, ...props }) =>
				<div {...props} style={{ 
					...style, 
					backgroundColor: 'rgba(0,0,0,.8)',
					borderRadius: '10px' 
				}} />
			}
		>
			<ThemeProvider theme={lightThemeColorScheme}>
			
				<GlobalStyle />
				<RouterProvider router={router} />
			
			</ThemeProvider>
		</Scrollbars>
	);
}

export default App;
