//createSlice
import { createSlice } from "@reduxjs/toolkit";
import { _onBoard } from "../Thunk/Onboard";

const appdata = createSlice({
  name: "appdata",
  initialState: {
    user: {},
    status: "idle",
    JWT: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(_onBoard.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(_onBoard.fulfilled, (state, action: any) => {
      const response = action.payload;
      state.user = {
        userId: response.data.userId,
        email: response.data.userEmail,
        fullname: response.data.userFullName,
        interest: response.data.interests,
      };
      state.JWT = response.data.token;
      state.status = "fullfilled";
    });
  },
});

export default appdata.reducer;
