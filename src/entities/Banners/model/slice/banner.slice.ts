import { createSlice } from '@reduxjs/toolkit';
import { bannerAdapter } from '@entities/Banners/model/adapter/banner.adapter';

export const bannerSlice = createSlice({
  name: 'content/banners',
  initialState: bannerAdapter.getInitialState(),
  reducers: {
    bannerAdd: bannerAdapter.addOne,
    bannersAdd: bannerAdapter.addMany,
  },
});

export const bannerActions = bannerSlice.actions;
export const bannerReducer = bannerSlice.reducer;
