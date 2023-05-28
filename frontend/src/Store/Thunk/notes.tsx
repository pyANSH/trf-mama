import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserDetails } from '../../serverCom/user';
import {
  deleteNotes,
  getNotes,
  updateNotes,
  uploadNotes,
} from '../../serverCom/notes';

export const _getNotes = createAsyncThunk(
  'notes/getNotes',
  async (
    {
      category,
      allNotes,
      userId,
    }: { category?: any; allNotes?: any; userId?: any },
    { rejectWithValue },
  ) => {
    try {
      const params = {
        category: '',
        allNotes,
        userId,
      };
      if (category) {
        params.category = category;
      }
      if (userId) {
        params.userId = userId;
      }
      const response = await getNotes({ params });
      console.log(response);

      return { response: response.data.data };
    } catch (error) {
      rejectWithValue(error);
    }
  },
);

export const _uploadNotes = createAsyncThunk(
  'notes/uploadNotes',
  async (
    {
      title,
      file,
      fileUrl,
      userId,
      description,
      category,
      tags,
    }: {
      category?: any;
      userId: any;
      title: any;
      file: any;
      fileUrl: any;
      description: any;
      tags: any;
    },
    { rejectWithValue },
  ) => {
    try {
      const body = {
        userId,
        category,
        noteTitle: title,
        fileUrl,
        fileName: file.name,
        fileSize: file.size,
        description,
        fileType: 'PDF',
        tags,
      };
      const response = await uploadNotes({ body });
      console.log(response);

      return {
        userId,
        category,
        noteTitle: title,
        fileUrl,
        fileName: file.name,
        fileSize: file.size,
        description,
        fileType: 'PDF',
        tags,
      };
    } catch (error) {
      rejectWithValue(error);
    }
  },
);
export const _updateNotes = createAsyncThunk(
  'notes/updateNotes',
  async (
    {
      noteId,
      userId,
      description,
      category,
      tags,
      viewCount,
      noteTitle,
    }: {
      category?: any;
      userId?: any;
      title?: any;
      file?: any;
      fileUrl?: any;
      description?: any;
      tags?: any;
      viewCount?: number;
      noteId: any;
      noteTitle: any;
    },
    { rejectWithValue },
  ) => {
    try {
      const body = {
        userId,
        category,
        description,
        tags,
        viewCount,
        noteId,
        noteTitle,
      };
      const response = await updateNotes({ body });
      console.log(response);

      return {
        userId,
        category,
        description,
        fileType: 'PDF',
        tags,
        viewCount,
      };
    } catch (error) {
      rejectWithValue(error);
    }
  },
);

export const _deleteNotes = createAsyncThunk(
  'notes/deleteNotes',
  async (
    { noteId, userId }: { noteId?: any; userId: any },
    { rejectWithValue },
  ) => {
    try {
      const body = {
        noteId,
        userId,
      };
      const response = await deleteNotes({ body });
      console.log(response);

      return { noteId };
    } catch (error) {
      rejectWithValue(error);
    }
  },
);
