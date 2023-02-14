//createSlice
import { createSlice } from "@reduxjs/toolkit";

const TestReducer = createSlice({
  name: "test",
  initialState: {
    counter: 0,
  },
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
  },
});

export const { increment, decrement } = TestReducer.actions;
export default TestReducer.reducer;
