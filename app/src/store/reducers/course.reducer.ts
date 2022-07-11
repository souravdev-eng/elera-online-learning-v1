import {createSlice} from '@reduxjs/toolkit';
import {getCourseList} from '../actions/course.action';

interface CourseProp {
  title: string;
  category: string;
  ratingAvg: number;
  totalReview: number;
  originalPrice: number;
  price: number;
  image: string;
  id: string;
  totalStudent: number;
}

interface CourseStateProp {
  courseList: CourseProp[];
  loading: boolean;
  error: any;
}

const initialState = {
  loading: false,
  courseList: [],
  error: null,
} as CourseStateProp;

const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getCourseList.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(getCourseList.fulfilled, (state, action) => {
      state.loading = false;
      state.courseList = action.payload;
      state.error = null;
    });

    builder.addCase(getCourseList.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default courseSlice.reducer;
