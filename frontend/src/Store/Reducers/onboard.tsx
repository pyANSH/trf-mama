//createSlice
import { createSlice } from '@reduxjs/toolkit';
import { _onBoard, _updateUser } from '../Thunk/Onboard';
import { _getUserDetails } from '../Thunk/users';

const appdata = createSlice({
	name: 'appdata',
	initialState: {
		user: {},
		status: 'idle',
		JWT: '',
		toast: {
			isVisible: false,
			text: '',
			timer: 3000,
		},
	},
	reducers: {
		showToast: (state, action) => {
			const { isVisible = true, text, timer = 1000 } = action.payload;
			state.toast = {
				isVisible,
				text,
				timer,
			};
		},
	},
	extraReducers: (builder) => {
		builder.addCase(_onBoard.pending, (state, action) => {
			state.status = 'pending';
		});
		builder.addCase(_onBoard.fulfilled, (state, action: any) => {
			const response = action.payload;
			state.user = {
				_id: response.data.userId,
				email: response.data.userEmail,
				fullname: response.data.userFullName,
				isMentor:response.data.isMentor,
				interests:response.data.interests,
				totalRes: response.data,
			};
			state.JWT = response.data.token;
			state.status = 'fullfilled';
		});

		builder.addCase(_getUserDetails.pending, (state, action) => {
			state.status = 'pending';
		});
		builder.addCase(_getUserDetails.fulfilled, (state, action: any) => {
			const { response, token } = action.payload;
			state.user = response.data[0];
			state.JWT = token;

			state.status = 'fullfilled';
		});
		builder.addCase(_updateUser.pending, (state, action) => {
			state.status = 'pending';
		});
		builder.addCase(_updateUser.fulfilled, (state, action: any) => {
			const { interests, isMentor } = action.payload;
			state.user = {
				...state.user,
				interests,
				isMentor,
			};

			state.status = 'fullfilled';
		});
	},
});
export const { showToast } = appdata.actions;
export default appdata.reducer;
