import { createSlice } from '@reduxjs/toolkit';
import { addBookMarkAction, showMyBookMarks } from '../actions/bookMarks.action';
import { BookMarksProps } from '../types/bookMarks.type';

interface Props {
    loading: boolean;
    bookMarks: any;
    myBookMarks: BookMarksProps[] | [];
    error: any;
}

const initialState = {
    loading: false,
    bookMarks: [],
    myBookMarks: [],
    error: null
} as Props;

const bookMarkSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {},
    extraReducers: builder => {
        // @@@@@@@@@@@@@@@@@@@@@ Adding Book Marks @@@@@@@@@@@@@@@@@@@@@@@@
        builder.addCase(addBookMarkAction.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(addBookMarkAction.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.bookMarks = payload
            state.error = null;
        });
        builder.addCase(addBookMarkAction.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        });

        // @@@@@@@@@@@@@@ SHOW MY BOOKMARKS @@@@@@@@@@@@@@
        builder.addCase(showMyBookMarks.pending, state => {
            state.loading = true;
        });

        builder.addCase(showMyBookMarks.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.myBookMarks = payload;
            state.error = null;
        });

        builder.addCase(showMyBookMarks.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        });
    }
});

export default bookMarkSlice.reducer;