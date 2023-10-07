import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../api/baseUrl';

interface LoginProps {
  email: string;
  password: string;
}

interface SignupProps {
  email: string;
  password: string;
  fullName: string;
}

export const userLoginAction = createAsyncThunk(
  'user/login',
  async (data: LoginProps, { rejectWithValue }) => {
    const { email, password } = data;
    try {
      const { data } = await axios.post(
        `${BASE_URL}/user/login`,
        { email, password },
        { headers: { 'Content-type': 'application/json' } },
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
  async (data: SignupProps, { rejectWithValue }) => {
    const { email, password, fullName } = data;
    try {
      const { data } = await axios.post(
        `${BASE_URL}/user/signup`,
        { email, password, fullName },
        { headers: { 'Content-type': 'application/json' } },
      );
      console.log({ data });
      return data;
    } catch (error: any) {
      console.log('User Signup Error: ', error.response.data.errors);
      throw rejectWithValue(error.response.data.errors);
    }
  },
);

interface UpdateUserProfileProps {
  id: string;
  token: string;
  nickName?: string;
  dateOfBirth?: Date | string;
  phoneNumber?: string;
  // dialCode: string;
  gender?: string;
  profileImage?: string;
}

export const updateUserProfile = createAsyncThunk(
  'patch/user-profile-update',
  async (
    {
      id,
      token,
      nickName,
      dateOfBirth,
      phoneNumber,
      gender,
      profileImage,
    }: UpdateUserProfileProps,
    { rejectWithValue },
  ) => {
    try {
      const { data } = await axios.patch(
        `${BASE_URL}/user/update-user-profile/${id}`,
        { nickName, dateOfBirth, phoneNumber, gender, profileImage },
        {
          headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },
      );

      return data.user;
    } catch (error: any) {
      throw rejectWithValue(error.response.data.errors);
    }
  },
);

export const updateUserFCMToken = createAsyncThunk(
  'put/update-user-fcm-token',
  async (
    { fcmToken, token }: { fcmToken: string; token: string },
    { rejectWithValue },
  ) => {
    try {
      const { data } = await axios.put(
        `${BASE_URL}/user/update-fcm-token`,
        { fcmToken, token },
        {
          headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },
      );

      return data.user;
    } catch (error: any) {
      throw rejectWithValue(error.response.data.errors);
    }
  },
);
