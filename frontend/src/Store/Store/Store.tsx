import { configureStore } from "@reduxjs/toolkit";
import { logger } from "redux-logger";
import TestReducer from "../Reducers/TestReducer";
export const store = configureStore({
  reducer: {
    //reducer:reducer
    test: TestReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
