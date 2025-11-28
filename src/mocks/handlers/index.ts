import { authHandlers } from '@mocks/handlers/auth/auth.handlers';
import { storiesHandlers, storiesSpecificHandlers } from '@mocks/handlers/story/stories.handlers';
import { stockHandlers } from '@mocks/handlers/stocks/stocks.handlers';
import { runningLineHandlers } from '@mocks/handlers/running-line/running-line.handlers';
import { bannerSheetsHandlers } from '@mocks/handlers/banner/banner.handler';
import { bottomSheetsHandlers } from '@mocks/handlers/bottom-sheets/bottom-sheets.handlers';
import {
  onboardingStoriesHandlers,
} from '@mocks/handlers/story-onboarding/story-onboarding.handlers.ts';


export const handlers = [
  ...authHandlers,
  ...storiesHandlers,
  ...storiesSpecificHandlers,
  ...stockHandlers,
  ...runningLineHandlers,
  ...bannerSheetsHandlers,
  ...bottomSheetsHandlers,
  ...onboardingStoriesHandlers,
];
