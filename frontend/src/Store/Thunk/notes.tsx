import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserDetails } from '../../serverCom/user';
import { getNotes, uploadNotes } from '../../serverCom/notes';

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

export const _uploadNotes = createAsyncThunk(
	'notes/uploadNotes',
	async ({title,file,fileUrl,userId,description,category,tags}:{category?:any,userId:any,title:any,file:any,fileUrl:any,description:any,tags:any}, { rejectWithValue }) => {
		try {
			const body={
				userId,
				category,
				noteTitle:title,
				fileUrl,
				fileName:file.name,
				fileSize:file.size,
				description,
				fileType:'PDF',
				tags
			};
			const response = await uploadNotes({body});
			console.log(response);
			
            
			return {response:response.data.data};
		} catch (error) {
			rejectWithValue(error);
		}
	},
);

