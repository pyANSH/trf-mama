import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './Store/Reducers/TestReducer';
import {
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';
import { router } from './routes';
import GlobalStyle from './globalStyles';

function App() {

	const counter: number = useSelector((state: any) => state.test.counter);
	const dispatch: any = useDispatch();
	return (
		<>
			<GlobalStyle />
			<RouterProvider router={router} />
		</>
	);
}

export default App;
