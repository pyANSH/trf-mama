import { createSlice } from '@reduxjs/toolkit';
import { _onBoard, _updateUser } from '../Thunk/Onboard';
import { _getUserDetails } from '../Thunk/users';
import { _getNotes } from '../Thunk/notes';

const notes = createSlice({
	name: 'notes',
	initialState: {
		notes:[],
		status:'idle',
	},
	reducers:{},
	extraReducers:(builder)=>{
		builder.addCase(
			_getNotes.fulfilled,(state:any,action:any)=>{
				const {response} = action.payload;
				state.notes=response;
			}
		);

	}});

export default notes.reducer;
