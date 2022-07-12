import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {BASE_URL} from '../../api/baseUrl';

export const getCreatorList = createAsyncThunk(
  'creator/getCreatorList',
  async (token: string, {rejectWithValue}) => {
    try {
      const response = await axios.get(`${BASE_URL}/creator`, {
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.creator;
    } catch (error: any) {
      throw rejectWithValue(error.response.data.errors);
    }
  },
);
