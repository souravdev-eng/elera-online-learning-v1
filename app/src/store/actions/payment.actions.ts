import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../api/baseUrl';

export const paymentSheetParams = createAsyncThunk(
  'post/paymentInit',
  async (Data: { token: string; orderId: string }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `${BASE_URL}/order/payment/${Data?.orderId}`,
        {},
        {
          headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${Data?.token}`,
          },
        },
      );
      return data;
    } catch (error: any) {
      throw rejectWithValue(error.response.data.errors);
    }
  },
);

export const paymentComplete = createAsyncThunk(
  'post/paymentComplete',
  async (Data: { token: string; orderId: string }, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(
        `${BASE_URL}/order/payment/${Data.orderId}`,
        {},
        {
          headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${Data.token}`,
          },
        },
      );
      return data;
    } catch (error: any) {
      throw rejectWithValue(error.response.data.errors);
    }
  },
);
