import { API_ENDPOINTS } from '@shared/api';
import { mockBanners } from '@mocks/data';
import { createContentHandlers } from '@mocks/handlers/base-content-handlers';

export const bannerSheetsHandlers = createContentHandlers({
  endpoint: API_ENDPOINTS.CONTENT.BANNERS,
  mockData: mockBanners,
});
