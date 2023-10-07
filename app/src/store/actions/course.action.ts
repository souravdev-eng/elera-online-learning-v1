import axios from 'axios';
import { BASE_URL } from '@env';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const showMyCourseAction = createAsyncThunk(
  'get/myCourse',
  async (Data: { token: string }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/course/mycourse`, {
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${Data.token}`,
        },
      });
      return data;
    } catch (error: any) {
      throw rejectWithValue(error.response.data.errors);
    }
  },
);
export const getCourseList = createAsyncThunk(
  'get/courseList',
  async (Data: { token: string }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `${BASE_URL}/course?fields=title,price,originalPrice,totalReview,ratingAvg,category,image,totalStudent`,
        {
          headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${Data.token}`,
          },
        },
      );
      return data.course;
    } catch (error: any) {
      throw rejectWithValue(error.response.data.errors);
    }
  },
);

interface CourseDetails {
  id: string;
  token: string;
}

export const getCourseDetailsById = createAsyncThunk(
  'get/courseDetailsById',
  async (data: CourseDetails, { rejectWithValue }) => {
    const { token, id } = data;

    try {
      const { data } = await axios.get(`${BASE_URL}/course/${id}`, {
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      return data.course;
    } catch (error: any) {
      throw rejectWithValue(error.response.data.errors);
    }
  },
);

export const showAllCourseByCreatorId = createAsyncThunk(
  'get/courseByCreatorID',
  async (params: any, { rejectWithValue }) => {
    const { token, creatorId } = params;

    try {
      const { data } = await axios.get(
        `${BASE_URL}/course/?creatorId=${creatorId}`,
        {
          headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },
      );

      return data?.course;
    } catch (error: any) {
      throw rejectWithValue(error.response.data.errors);
    }
  },
);


