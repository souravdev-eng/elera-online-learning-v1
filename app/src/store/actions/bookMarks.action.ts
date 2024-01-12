import axios from 'axios';
import { BASE_URL } from '../../api/baseUrl';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const addBookMarkAction = createAsyncThunk(
    'post/bookmarks',
    async (Data: { courseId: string, token: string }, { rejectWithValue }) => {
        try {
            const { data } = await axios.post(`${BASE_URL}/course/bookmarks/${Data?.courseId}`, {}, {
                headers: {
                    'Content-type': 'application/json',
                    Authorization: `Bearer ${Data?.token}`,
                },
            });
            return data?.bookMark;
        } catch (error: any) {
            throw rejectWithValue(error.response.data.errors);
        }
    },
);

export const showMyBookMarks = createAsyncThunk(
    'get/showAllBookMarks',
    async (Data: { token: string }, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(
                `${BASE_URL}/course/bookmarks/?fields=title,price,originalPrice,totalReview,ratingAvg,category,image,totalStudent`,
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