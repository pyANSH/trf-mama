import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import TestReducer from '../Reducers/TestReducer';
import appdata from '../Reducers/onboard';
export const store = configureStore({
	reducer: {
		//reducer:reducer
		test: TestReducer,
		appdata
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
