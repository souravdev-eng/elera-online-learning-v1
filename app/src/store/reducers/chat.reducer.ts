import {createSlice} from '@reduxjs/toolkit';

interface InitialProps {
  chatList: {
    message: string;
    sender: {
      id: string;
      nickName: string;
      profileImage: string;
    };
    receiver: {
      id: string;
      nickName: string;
      profileImage: string;
    };
    createdAt: string;
  }[];

  chatContactList: {
    id: string;
    nickName: string;
    profileImage: string;
  }[];
}

const initialState = {
  chatList: [],
  chatContactList: [],
} as InitialProps;

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addMessage: (state, {payload}) => {
      state.chatList.push(payload);
    },
    getAllUser: state => {
      for (const item of state.chatList) {
        const isDuplicate = state.chatContactList.find(
          obj => obj.id === item.receiver.id,
        );
        if (!isDuplicate) {
          state.chatContactList.push(item.receiver);
        }
      }
    },
  },
});

export const {addMessage, getAllUser} = chatSlice.actions;
export default chatSlice.reducer;
