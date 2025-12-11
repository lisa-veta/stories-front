import { createSlice } from '@reduxjs/toolkit';
import { onboardingStoriesAdapter } from '@entities/OnboardingStories/model/adapter/onboardingStories.adapter';


export const onboardingStoriesSlice = createSlice({
  name: 'content/onboarding-stories',
  initialState: onboardingStoriesAdapter.getInitialState(),
  reducers: {
    onboardingStoryAdd: onboardingStoriesAdapter.addOne,
    onboardingStoriesAdd: onboardingStoriesAdapter.addMany,
  },
});

export const onboardingStoryActions = onboardingStoriesSlice.actions;
export const onboardingStoryReducer = onboardingStoriesSlice.reducer;
