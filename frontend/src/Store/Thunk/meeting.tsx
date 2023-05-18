import { createAsyncThunk } from '@reduxjs/toolkit';
import { getMeetings, scheduleMeeting, updateMeetingStatus } from '../../serverCom/meeting';

export const _scheduleMeeting = createAsyncThunk(
	'meeting/scheduleMeeting',
	async ({body}:{body:any}, { rejectWithValue }) => {
		try {
			console.log(body);
			
			await scheduleMeeting({body});
		} catch (error) {
			rejectWithValue(error);
		}
	},
);

export const _getMeetings = createAsyncThunk(
	'meetings/getMeetings',
	async({userId}:{userId:string},{rejectWithValue})=>{
		try {
			
			const response =await getMeetings({params:{userId}});
			
			return {response:response.data.meetings};
      
		} catch (error) {
			rejectWithValue(error);
  
		}
	}
);

export const _AcceptInvite = createAsyncThunk(
	'meetings/AcceptInvite',
	async({body}:{body:any},{rejectWithValue})=>{
		try {
			
			const response =await updateMeetingStatus({body});
			console.log(response);
			return {meetingId:body.meetingId};

      
		} catch (error) {
			rejectWithValue(error);
  
		}
	}
);
export const _RejectInvite = createAsyncThunk(
	'meetings/RejectInvite',
	async({body}:{body:any},{rejectWithValue})=>{
		try {
			
			const response =await updateMeetingStatus({body});
			
			return {meetingId:body.meetingId};
      
		} catch (error) {
			rejectWithValue(error);
  
		}
	}
);