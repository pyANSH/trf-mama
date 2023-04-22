import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserDetails } from '../../serverCom/user';

export const _getUserDetails = createAsyncThunk(
	'user/getUserDetails',
	async ({token}:{token:string}, { rejectWithValue }) => {
		try {
			const response = await getUserDetails();
			return {response,token};
		} catch (error) {
			rejectWithValue(error);
		}
	},
);