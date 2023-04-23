import { createSlice } from '@reduxjs/toolkit';
import { _onBoard, _updateUser } from '../Thunk/Onboard';
import { _getUserDetails } from '../Thunk/users';
import { _getNotes } from '../Thunk/notes';

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

	}});
export const { addTags, removeTags,initTags } = notes.actions;


export default notes.reducer;
