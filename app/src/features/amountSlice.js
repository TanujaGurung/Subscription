import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  status: 'idle',
};

export const amountSlice = createSlice({
  name: 'amount',
  initialState,
  reducers: {
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },  
});

export const {incrementByAmount } = amountSlice.actions;

export const selectAmount = (state) => state.amount.value;

export default amountSlice.reducer;
