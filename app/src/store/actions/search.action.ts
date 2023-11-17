/*
useEffect(() => {
    const ourRequest = axios.CancelToken.source() // <-- 1st step
  
    const fetchPost = async () => {
      try {
        const response = await Axios.get(`endpointURL`, {
          cancelToken: ourRequest.token, // <-- 2nd step
        })
        console.log(response.data)
        setPost(response.data)
        setIsLoading(false)
      } catch (err) {
        console.log('There was a problem or request was cancelled.')
      }
    }
    fetchPost()
  
    return () => {
      ourRequest.cancel() // <-- 3rd step
    }
  }, [])
  */

import axios from 'axios';
import { BASE_URL } from '@env';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const showMyCourseAction = createAsyncThunk(
    'get/myCourse',
    async (Data: { token: string }, { rejectWithValue }) => {
        try {
            const CancelToken = axios.CancelToken
            const cancelTokenSource = CancelToken.source()

            const { data } = await axios.get(`${BASE_URL}/course/mycourse`, {
                cancelToken: cancelTokenSource.token,
                headers: {
                    'Content-type': 'application/json',
                    Authorization: `Bearer ${Data.token}`,
                },
            });
            return data;
        } catch (error: any) {
            if (axios.isCancel(error)) {
                console.error(error.message);
            } else {
                throw rejectWithValue(error.response.data.errors);
            }
        }
    },
);