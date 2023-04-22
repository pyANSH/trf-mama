import { createSlice } from '@reduxjs/toolkit';
import { _onBoard, _updateUser } from '../Thunk/Onboard';
import { _getUserDetails } from '../Thunk/users';

const notes = createSlice({
	name: 'notes',
	initialState: {
		notes:[],
		status:'idle',
	},
	reducers:{},
	extraReducers:{}});