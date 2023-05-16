import { createAsyncThunk } from '@reduxjs/toolkit';
import { getMeetings, scheduleMeeting } from '../../serverCom/meeting';

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
			console.log(response);
			
			return {response:response.data.meetings};
      
		} catch (error) {
			rejectWithValue(error);
  
		}
	}
);