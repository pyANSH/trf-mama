import { createSlice } from '@reduxjs/toolkit';
import { _onBoard, _updateUser } from '../Thunk/Onboard';
import { _getUserDetails } from '../Thunk/users';
import { _deleteNotes, _getNotes, _uploadNotes } from '../Thunk/notes';

const notes = createSlice({
	name: 'notes',
	initialState: {
		notes:[],
		status:'idle',
		tags:[]
	},
	reducers:{
		addTags: (state: any, action: any) => {
			if (
				state.tags.findIndex((item: any) => item === action.payload) === -1
			)
				state.tags.push(action.payload);
		},
		removeTags: (state: any, action: any) => {
			if (state.tags.length > 0) {
				state.tags = state.tags.filter(
					(item: any, i: number) => i !== action.payload,
				);
			}
		},
		initTags:(state: any,) => {
			state.tags = [];
			
		},
	},
	extraReducers:(builder)=>{
		builder.addCase(
			_getNotes.fulfilled,(state:any,action:any)=>{
				const {response} = action.payload;
				state.notes=response;
			}
		);
		builder.addCase(
			_deleteNotes.fulfilled,(state:any,action:any)=>{
				const { noteId } = action.payload;
				const noteIndex = state.notes.findIndex((note: any) => note._id === noteId);
				if (noteIndex !== -1) {
				  state.notes.splice(noteIndex, 1);
				}

			}
		);
		builder.addCase(
			_uploadNotes.fulfilled,(state:any,action:any)=>{
				const { userId,
					category,
					noteTitle,
					fileUrl,
					fileName,
					fileSize,
					description,
					fileType,
					tags } = action.payload;
				const newNote = {
					userId,
					category,
					noteTitle,
					fileUrl,
					fileName,
					fileSize,
					description,
					fileType,
					tags,
					  };
				  
					  state.notes.push(newNote);

			}
		);
		
	}});
export const { addTags, removeTags,initTags } = notes.actions;


export default notes.reducer;
