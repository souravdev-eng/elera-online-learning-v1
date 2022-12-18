import {createSlice} from '@reduxjs/toolkit';
import {newOrderAction} from '../actions/order.action';
import {paymentComplete, paymentSheetParams} from '../actions/payment.actions';

interface OrderStateProp {
  loading: boolean;
  error: any;
  order: any;
  payment: any;
}

const initialState = {
  loading: false,
  error: null,
  order: null,
  payment: null,
} as OrderStateProp;

const orderSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(newOrderAction.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(newOrderAction.fulfilled, (state, action) => {
      state.loading = false;
      state.order = action.payload;
    });

    builder.addCase(newOrderAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(paymentSheetParams.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(paymentSheetParams.fulfilled, (state, action) => {
      state.loading = false;
      state.payment = action.payload;
    });

    builder.addCase(paymentSheetParams.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(paymentComplete.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(paymentComplete.fulfilled, (state, action) => {
      state.loading = false;
      state.payment = action.payload;
    });

    builder.addCase(paymentComplete.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default orderSlice.reducer;
