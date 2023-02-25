import {createAsyncThunk} from '@reduxjs/toolkit';
import { userOnboard } from '../../serverCom/onboard';

export const _onBoard = createAsyncThunk(
	'onboard/users',async({body}:any,{rejectWithValue})=>{
		try {
			const response = await userOnboard({body}); 
			return response;
		} catch (error) {
			rejectWithValue(error);
		}
		
	}
);