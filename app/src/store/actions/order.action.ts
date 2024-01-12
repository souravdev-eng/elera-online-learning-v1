import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../api/baseUrl';

export const newOrderAction = createAsyncThunk(
  'post/newOrder',
  async (Data: { token: string; courseId: string }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `${BASE_URL}/order/${Data?.courseId}`,
        {},
        {
          headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${Data?.token}`,
          },
        },
      );
      return data.order;
    } catch (error: any) {
      throw rejectWithValue(error.response.data.errors);
    }
  },
);
