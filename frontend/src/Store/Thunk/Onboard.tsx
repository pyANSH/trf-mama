import { createAsyncThunk } from '@reduxjs/toolkit';
import { userInterest, userOnboard } from '../../serverCom/onboard';

export const _onBoard = createAsyncThunk(
  'onboard/users',
  async ({ body }: any, { rejectWithValue }) => {
    try {
      const response = await userOnboard({ body });
      return response;
    } catch (error) {
      rejectWithValue(error);
    }
  },
);
export const _updateUser = createAsyncThunk(
  'interest/updateUser',
  async (
    {
      interests,
      isMentor,
      userEmail,
      socialRefererId,
    }: {
      interests: string[];
      isMentor: boolean;
      userEmail: string;
      socialRefererId: string;
    },
    { rejectWithValue },
  ) => {
    const body = {
      userEmail,
      socialRefererId,
      interests,
      isMentor,
    };
    try {
      const response = await userInterest({ body });
      return response;
    } catch (error) {
      rejectWithValue(error);
    }
  },
);
