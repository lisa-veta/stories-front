import { API_ENDPOINTS } from '@shared/api';
import { mockBottomSheets } from '@mocks/data';
import { createContentHandlers } from '@mocks/handlers/base-content-handlers.ts';

export const bottomSheetsHandlers  = createContentHandlers({
  endpoint: API_ENDPOINTS.CONTENT.BOTTOM_SHEETS,
  mockData: mockBottomSheets,
});
