import { createSlice } from '@reduxjs/toolkit';
import { bottomSheetAdapter } from '@entities/BottomSheets/model/adapter/bottomSheet.adapter';

export const bottomSheetSlice = createSlice({
  name: 'content/bottom-sheets',
  initialState: bottomSheetAdapter.getInitialState(),
  reducers: {
    bottomSheetAdd: bottomSheetAdapter.addOne,
    bottomSheetsAdd: bottomSheetAdapter.addMany,
  },
});

export const bottomSheetActions = bottomSheetSlice.actions;
export const bottomSheetReducer = bottomSheetSlice.reducer;
