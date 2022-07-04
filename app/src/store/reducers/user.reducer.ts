import {createSlice} from '@reduxjs/toolkit';
import {userLoginAction, userSignupAction} from '../actions/user.action';

interface UserProps {
  loading: boolean;
  data: any;
  error: any;
}

const initialState = {
  loading: false,
  data: null,
  error: null,
} as UserProps;

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(userLoginAction.pending, state => {
      state.loading = true;
    });
    builder.addCase(userLoginAction.fulfilled, (state, {payload}) => {
      state.loading = false;
      state.data = payload;
      state.error = null;
    });

    builder.addCase(userLoginAction.rejected, (state, {payload}) => {
      state.loading = false;
      state.error = payload;
    });

    builder.addCase(userSignupAction.pending, (state, {payload}) => {
      state.loading = true;
    });

    builder.addCase(userSignupAction.fulfilled, (state, {payload}) => {
      state.loading = false;
      state.data = payload;
      state.error = null;
    });

    builder.addCase(userSignupAction.rejected, (state, {payload}) => {
      state.loading = false;
      state.error = payload;
    });
  },
});

export default userSlice.reducer;
