import { API_ENDPOINTS } from '@shared/api';
import { createContentHandlers } from '@mocks/handlers/base-content-handlers';
import { mockOnboardingStories } from '@mocks/data/content/onboarding-stories/story.ts';

export const onboardingStoriesHandlers = createContentHandlers({
  endpoint: API_ENDPOINTS.CONTENT.ONBOARDING_STORIES,
  mockData: mockOnboardingStories,
});
