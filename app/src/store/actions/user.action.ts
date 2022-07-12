import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {BASE_URL} from '../../api/baseUrl';

interface Props {
  email: string;
  password: string;
}

interface Props1 {
  email: string;
  password: string;
  fullName: string;
}

export const userLoginAction = createAsyncThunk(
  'user/login',
  async (data: Props, {rejectWithValue}) => {
    const {email, password} = data;
    try {
      const {data} = await axios.post(
        `${BASE_URL}/user/login`,
        {email, password},
        {headers: {'Content-type': 'application/json'}},
      );
      return data;
    } catch (error: any) {
      console.log('User Login Error: ', error.response.data.errors);
      throw rejectWithValue(error.response.data.errors);
    }
  },
);

export const userSignupAction = createAsyncThunk(
  'user/signup',
  async (data: Props1, {rejectWithValue}) => {
    const {email, password, fullName} = data;
    try {
      const {data} = await axios.post(
        `${BASE_URL}/user/signup`,
        {email, password, fullName},
        {headers: {'Content-type': 'application/json'}},
      );
      console.log({data});
      return data;
    } catch (error: any) {
      console.log('User Signup Error: ', error.response.data.errors);
      throw rejectWithValue(error.response.data.errors);
    }
  },
);
