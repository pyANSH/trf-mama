import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './Store/Store/Store';
import { SnackbarProvider, useSnackbar } from 'notistack'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		
		<Provider store={store}>
			<SnackbarProvider />
			<App />
		</Provider>
	</React.StrictMode>
);
