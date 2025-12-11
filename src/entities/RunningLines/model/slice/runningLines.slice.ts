import { createSlice } from '@reduxjs/toolkit';
import { runningLinesAdapter } from '@entities/RunningLines/model/adapter/runningLines.adapter';

export const runningLinesSlice = createSlice({
  name: 'content/running-lines',
  initialState: runningLinesAdapter.getInitialState(),
  reducers: {
    runningLineAdd: runningLinesAdapter.addOne,
    runningLinesAdd: runningLinesAdapter.addMany,
  },
});

export const runningLineActions = runningLinesSlice.actions;
export const runningLineReducer = runningLinesSlice.reducer;
