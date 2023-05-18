import { createSlice } from '@reduxjs/toolkit';
import { _AcceptInvite, _RejectInvite, _getMeetings, _scheduleMeeting } from '../Thunk/meeting';

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
		builder.addCase(_AcceptInvite.fulfilled,(state:any,action:any)=>{
			const {meetingId} = action.payload;
			const meetingIndex = state.meetingDetails.findIndex((meeting:any) => meeting._id === meetingId);
			state.meetingDetails[meetingIndex].meetingStatus='accepted';
		});
		builder.addCase(_RejectInvite.fulfilled,(state:any,action:any)=>{
			const {meetingId} = action.payload;
			const meetingIndex = state.meetingDetails.findIndex((meeting:any) => meeting._id === meetingId);
			state.meetingDetails[meetingIndex].meetingStatus='rejected';
		});

		
		
	},
	
});

export default mentors.reducer;
