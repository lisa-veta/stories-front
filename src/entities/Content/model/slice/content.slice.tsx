import { combineReducers } from 'redux';
import { bannerReducer } from '@entities/Banners/model/slice/banner.slice';
import { storyReducer } from '@entities/Stories/model/slice/story.slice';
import { stockReducer } from '@entities/Stocks/model/slice/stocks.slice';
import { runningLineReducer } from '@entities/RunningLines/model/slice/runningLines.slice';
import { bottomSheetReducer } from '@entities/BottomSheets/model/slice/bottomSheet.slice';
import { onboardingStoryReducer } from '@entities/OnboardingStories/model/slice/onboardingStories.slice';

export const contentReducer = combineReducers({
  banners: bannerReducer,
  stories: storyReducer,
  stocks: stockReducer,
  runningLines: runningLineReducer,
  bottomSheets: bottomSheetReducer,
  onboardingStories: onboardingStoryReducer,
});
