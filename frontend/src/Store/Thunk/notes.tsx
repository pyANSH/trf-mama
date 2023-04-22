import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserDetails } from '../../serverCom/user';
import { getNotes } from '../../serverCom/notes';

export const _getNotes = createAsyncThunk(
	'notes/getNotes',
	async ({category,userId}:{category?:any,userId:any}, { rejectWithValue }) => {
		try {
			const params={
				userId,
				category:''
			};
			if(category){
				params.category=category;
			}
			const response = await getNotes({params});
			console.log(response);
            
			return {response:response.data.data};
		} catch (error) {
			rejectWithValue(error);
		}
	},
);