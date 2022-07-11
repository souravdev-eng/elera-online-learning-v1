import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {BASE_URL} from '../../api/baseUrl';

export const getCourseList = createAsyncThunk(
  'get/courseList',
  async (token: string, {rejectWithValue}) => {
    try {
      const {data} = await axios.get(
        `${BASE_URL}/course?fields=title,price,originalPrice,totalReview,ratingAvg,category,image,totalStudent`,
        {
          headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },
      );
      return data.data;
    } catch (error: any) {
      throw rejectWithValue(error.response.data.errors);
    }
  },
);
