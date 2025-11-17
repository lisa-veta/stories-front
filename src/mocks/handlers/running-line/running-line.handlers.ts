import { API_ENDPOINTS } from '@shared/api';
import { mockRunningLines } from '@mocks/data';
import { createContentHandlers } from '@mocks/handlers/base-content-handlers';

export const runningLineHandlers = createContentHandlers({
  endpoint: API_ENDPOINTS.CONTENT.RUNNING_LINES,
  mockData: mockRunningLines,
});
