import axios from 'axios';
import { BASE_URL } from '@env';
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