import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserDetails, updateUserDetails } from '../../serverCom/user';

export const _getUserDetails = createAsyncThunk(
  'user/getUserDetails',
  async ({ token }: { token: string }, { rejectWithValue }) => {
    try {
      const response = await getUserDetails();
      return { response, token };
    } catch (error) {
      rejectWithValue(error);
    }
  },
);
export const _updateUserDetails = createAsyncThunk(
  'user/getUserDetails',
  async (
    {
      college,
      userFullName,
      gender,
    }: {
      college: string;
      userFullName: string;
      gender: string;
    },
    { rejectWithValue },
  ) => {
    try {
      const body = {
        college: college,
        userFullName: userFullName,
        gender: gender,
      };
      const response = await updateUserDetails({ body });
      return { response };
    } catch (error) {
      rejectWithValue(error);
    }
  },
);
