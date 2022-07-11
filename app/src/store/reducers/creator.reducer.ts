import {createSlice} from '@reduxjs/toolkit';
import {getCreatorList} from '../actions/creator.action';

interface CreatorProp {
  bio: string;
  nickName: string;
  profileImage: string;
  id: string;
}

interface CreatorStateProps {
  creatorList: CreatorProp[];
  loading: boolean;
  error: any;
}

const initialState = {
  loading: false,
  creatorList: [],
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
  },
});

export default creatorSlice.reducer;
