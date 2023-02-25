//createSlice
import { createSlice } from '@reduxjs/toolkit';
import { _onBoard } from '../Thunk/Onboard';

const appdata = createSlice({
	name: 'appdata',
	initialState: {
		user:{},
		status:'idle'
	},
	reducers: {
		
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
				state.user = response;
				state.status='fullfilled';
			}
		);
	}
});

export default appdata.reducer;
