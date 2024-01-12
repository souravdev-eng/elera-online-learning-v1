import {createSlice} from '@reduxjs/toolkit';
import {getCreatorList, getCreatorById} from '../actions/creator.action';
import {CreatorStateProps} from '../types/creator.types';

const initialState = {
  loading: false,
  creatorList: [],
  creatorDetails: null,
  error: null,
} as CreatorStateProps;

const creatorSlice = createSlice({
  name: 'creator',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getCreatorList.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getCreatorList.fulfilled, (state, action) => {
      state.loading = false;
      state.creatorList = action.payload;
      state.error = null;
    });
    builder.addCase(getCreatorList.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(getCreatorById.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getCreatorById.fulfilled, (state, action) => {
      state.loading = false;
      state.creatorDetails = action.payload;
    });
    builder.addCase(getCreatorById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default creatorSlice.reducer;
