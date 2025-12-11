import { createSlice } from '@reduxjs/toolkit';
import { storyAdapter } from '@entities/Stories/model/adapter/story.adapter';

export const storySlice = createSlice({
  name: 'content/stories',
  initialState: storyAdapter.getInitialState(),
  reducers: {
    storyAdd: storyAdapter.addOne,
    storiesAdd: storyAdapter.addMany,
  },
});

export const storyActions = storySlice.actions;
export const storyReducer = storySlice.reducer;
