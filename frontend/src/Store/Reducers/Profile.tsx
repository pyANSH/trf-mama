import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	interest: [],
};

const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		initUpdate: (state: any, action: any) => {
			state.interest = action.payload;
		},
		addInterest: (state: any, action: any) => {
			if (
				state.interest.findIndex((item: any) => item === action.payload) === -1
			)
				state.interest.push(action.payload);
		},
		removeInterest: (state: any, action: any) => {
			if (state.interest.length > 1) {
				state.interest = state.interest.filter(
					(item: any, i: number) => i !== action.payload,
				);
			}
		},
	},
});

export const { addInterest, removeInterest, initUpdate } = profileSlice.actions;

export default profileSlice.reducer;
