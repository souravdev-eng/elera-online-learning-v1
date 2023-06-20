import { createSlice } from '@reduxjs/toolkit';
import { getCourseDetailsById, getCourseList, showAllCourseByCreatorId } from '../actions/course.action';
import { courseDetailsProps } from '../types/course.types';

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

export interface CourseStateProp {
  courseList: CourseProp[];
  loading: boolean;
  error: any;
  courseDetails: courseDetailsProps | null;
  creatorCourseList: CreatorCourseProps
}

interface CreatorCourseProps {
  loading: boolean,
  creatorCourseList: CourseProp[]
  error: any
}

const initialState = {
  loading: false,
  courseList: [],
  error: null,
  courseDetails: null,
  creatorCourseList: {
    loading: false,
    creatorCourseList: [],
    error: null
  }
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

    // ------------ SHOW COURSE BY CREATOR ID ------------

    builder.addCase(showAllCourseByCreatorId.pending, (state, action) => {
      state.creatorCourseList.loading = true;
      state.error = action.payload;
    });
    builder.addCase(showAllCourseByCreatorId.fulfilled, (state, action) => {
      state.creatorCourseList.loading = false;
      state.creatorCourseList.creatorCourseList = action.payload;
    });
    builder.addCase(showAllCourseByCreatorId.rejected, (state, action) => {
      state.creatorCourseList.loading = false;
      state.creatorCourseList.error = action.payload;
    });

    // ------------ COURSE DETAILS ------------

    builder.addCase(getCourseDetailsById.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(getCourseDetailsById.fulfilled, (state, action) => {
      state.loading = false;
      state.courseDetails = action.payload;
      state.error = null;
    });

    builder.addCase(getCourseDetailsById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default courseSlice.reducer;
