import type { ContentSchema } from '@entities/Content/types/content.types';

export interface StateSchema {
  content: ContentSchema;
}

export const getInitialState = (): StateSchema => ({
  content: {
    banners: { ids: [], entities: {} },
    stories: { ids: [], entities: {} },
    stocks: { ids: [], entities: {} },
    runningLines: { ids: [], entities: {} },
    bottomSheets: { ids: [], entities: {} },
    onboardingStories: { ids: [], entities: {} },
  },
});
