import { createSlice } from '@reduxjs/toolkit';
import { _getMeetings } from '../Thunk/meeting';

const mentors = createSlice({
	name: 'meetings',
	initialState: {
		meetingDetails:[]
	},
	reducers:{},
	extraReducers:(builder)=> {
		builder.addCase(_getMeetings.fulfilled,(state,action:any)=>{
			const {response} = action.payload;
			state.meetingDetails=response;
		});
	},
});

export default mentors.reducer;
