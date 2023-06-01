import { createAsyncThunk } from '@reduxjs/toolkit';
import { getMentors, getUserDetails, updateUserDetails } from '../../serverCom/user';

export const _getUserDetails = createAsyncThunk(
	'user/getUserDetails',
	async ({ token }: { token: string }, { rejectWithValue }) => {
		try {
			const response = await getUserDetails();
			return { response, token };
		} catch (error) {
			rejectWithValue(error);
		}
	},
);
export const _updateUserDetails = createAsyncThunk(
	'user/updateUser',
	async (
		{
			college,
			userFullName,
			gender,
		}: {
      college: string;
      userFullName: string;
      gender: string;
    },
		{ rejectWithValue },
	) => {
		try {
			const body = {
				college: college,
				userFullName: userFullName,
				gender: gender,
			};
			const response = await updateUserDetails({ body });
			return { response };
		} catch (error) {
			rejectWithValue(error);
		}
	},
);


export const _getMentorList = createAsyncThunk(
	'user/getMentors',
	async({type}:{type:string},{rejectWithValue})=>{
		try {
			console.log(type);
			
			const response =await getMentors();
			return {response:response.data};
      
		} catch (error) {
			rejectWithValue(error);
  
		}
	}
);