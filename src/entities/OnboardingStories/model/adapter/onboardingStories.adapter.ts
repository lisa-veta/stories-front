import { createEntityAdapter } from '@reduxjs/toolkit';
import type {
  OnboardingStory,
} from '@shared/api';

export const onboardingStoriesAdapter = createEntityAdapter({
  selectId: (onboardingStory: OnboardingStory) => onboardingStory.id.toString(),
  sortComparer: (a, b) =>
    new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime(),
});
