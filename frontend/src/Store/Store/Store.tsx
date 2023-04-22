import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import TestReducer from '../Reducers/TestReducer';
import appdata from '../Reducers/onboard';
import Profile from '../Reducers/Profile';
import notes from '../Reducers/notes';
import { getDefaultMiddleware } from '@reduxjs/toolkit';

export const store = configureStore({
	reducer: {
		//reducer:reducer
		test: TestReducer,
		profile: Profile,
		appdata,
		notes
	},
	// non-serializable values in the store + redux-logger
	middleware: getDefaultMiddleware({
		serializableCheck: false,
	}).concat(logger),
});
