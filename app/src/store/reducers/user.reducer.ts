import {createSlice} from '@reduxjs/toolkit';
import {showMyCourseAction} from '../actions/course.action';
import {
  showMyBookMarks,
  userLoginAction,
  userSignupAction,
  updateUserProfile,
  updateUserFCMToken,
} from '../actions/user.action';
import {courseDetailsProps, MyCourseInterface} from '../types/course.types';
import {UserDataProps, UserBookMarksProps} from '../types/user.types';

interface UserProps {
  loading: boolean;
  data: UserDataProps | null;
  myCourse: MyCourseInterface[];
  error: any;
  myBookMarks: UserBookMarksProps[];
}

const initialState = {
  loading: false,
  data: null,
  myCourse: [],
  myBookMarks: [],
  error: null,
} as UserProps;

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signOut: () => initialState,
  },
  extraReducers: builder => {
    // @@@@@@@@@@@@@@ UPDATE FCM TOKEN @@@@@@@@@@@@@@

    builder.addCase(updateUserFCMToken.pending, state => {
      state.loading = true;
    });
    builder.addCase(updateUserFCMToken.fulfilled, state => {
      state.loading = false;
    });
    builder.addCase(updateUserFCMToken.rejected, (state, {payload}) => {
      state.loading = false;
      state.error = payload;
    });
    // @@@@@@@@@@@@@@ SHOW MY COURSE @@@@@@@@@@@@@@
    builder.addCase(showMyCourseAction.pending, state => {
      state.loading = true;
    });
    builder.addCase(showMyCourseAction.fulfilled, (state, {payload}) => {
      state.loading = false;
      state.myCourse = payload;
    });
    builder.addCase(showMyCourseAction.rejected, (state, {payload}) => {
      state.loading = false;
      state.error = payload;
    });

    // @@@@@@@@@@@@@@ USER LOGIN @@@@@@@@@@@@@@

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

    // @@@@@@@@@@@@@@ USER SIGNUP @@@@@@@@@@@@@@

    builder.addCase(userSignupAction.pending, state => {
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
    // @@@@@@@@@@@@@@ SHOW MY BOOK MARKS @@@@@@@@@@@@@@
    builder.addCase(showMyBookMarks.pending, state => {
      state.loading = true;
    });

    builder.addCase(showMyBookMarks.fulfilled, (state, {payload}) => {
      state.loading = false;
      state.myBookMarks = payload;
      state.error = null;
    });

    builder.addCase(showMyBookMarks.rejected, (state, {payload}) => {
      state.loading = false;
      state.error = payload;
    });
    // @@@@@@@@@@@@@@ USER PROFILE @@@@@@@@@@@@@@
    builder.addCase(updateUserProfile.pending, state => {
      state.loading = true;
    });
    builder.addCase(updateUserProfile.fulfilled, (state, {payload}) => {
      state.loading = false;
      state.data!.user = payload;
    });

    builder.addCase(updateUserProfile.rejected, (state, {payload}) => {
      state.loading = false;
      state.error = payload;
    });
  },
});
export const {signOut} = userSlice.actions;

export default userSlice.reducer;
