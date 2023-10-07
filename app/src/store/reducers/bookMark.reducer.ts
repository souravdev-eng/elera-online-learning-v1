import { createSlice } from '@reduxjs/toolkit';
import { addBookMarkAction } from '../actions/bookMarks.action';


interface Props {
    loading: boolean;
    bookMarks: any;
    bookMarkMessage: string,
    error: any;
}

const initialState = {
    loading: false,
    bookMarks: [],
    error: null
} as Props;

const bookMarkSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {},
    extraReducers: builder => {
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
    }
});

export default bookMarkSlice.reducer;