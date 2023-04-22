//createSlice
import { createSlice } from "@reduxjs/toolkit";
import { _onBoard } from "../Thunk/Onboard";

const appdata = createSlice({
	name: 'appdata',
	initialState: {
		user:{},
		status:'idle',
		JWT:'',
		toast:{
			isVisible:false,
			text:'',
			timer:3000
		},
	},
	reducers: {
		showToast: (state, action) => {
			const { isVisible = true, text, timer = 1000 } = action.payload;
			state.toast = {
				isVisible, text, timer
			};
		},
	},
	extraReducers:(builder)=>{
		builder.addCase(
			_onBoard.pending,(state, action)=>{
				state.status='pending';
			}
		);
		builder.addCase(
			_onBoard.fulfilled,(state, action:any)=>{
				const response = action.payload;
				state.user = {
					userId:response.data.userId,
					email:response.data.userEmail,
					fullname:response.data.userFullName
				};
				state.JWT=response.data.token;
				state.status='fullfilled';
			}
		);
	}
});

export default appdata.reducer;
