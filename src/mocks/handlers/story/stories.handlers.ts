import { API_ENDPOINTS } from '@shared/api';
import { mockStories, mockStoryDetail } from '@mocks/data';
import { createContentHandlers } from '@mocks/handlers/base-content-handlers';

export const storiesHandlers = createContentHandlers({
  endpoint: API_ENDPOINTS.CONTENT.STORIES,
  mockData: mockStories,
  detailData: [mockStoryDetail],
});
