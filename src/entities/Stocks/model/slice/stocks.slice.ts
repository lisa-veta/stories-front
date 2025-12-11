import { createSlice } from '@reduxjs/toolkit';
import { stocksAdapter } from '@entities/Stocks/model/adapter/stocks.adapter.ts';

export const stocksSlice = createSlice({
  name: 'content/stocks',
  initialState: stocksAdapter.getInitialState(),
  reducers: {
    stockAdd: stocksAdapter.addOne,
    stocksAdd: stocksAdapter.addMany,
  },
});

export const stockActions = stocksSlice.actions;
export const stockReducer = stocksSlice.reducer;
