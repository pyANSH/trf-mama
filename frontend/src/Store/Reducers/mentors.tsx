import { createSlice } from '@reduxjs/toolkit';
import { _getMentorList } from '../Thunk/users';

const mentors = createSlice({
	name: 'mentors',
	initialState: {
		mentorList:[]
	},
	reducers:{},
	extraReducers:(builder)=> {
		builder.addCase(_getMentorList.fulfilled,(state,action:any)=>{
			const {response} = action.payload;
			state.mentorList=response;
		});
	},
});

export default mentors.reducer;
