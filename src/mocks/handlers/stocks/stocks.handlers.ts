import { API_ENDPOINTS  } from '@shared/api';
import { mockStocks, mockStocksDetail } from '@mocks/data';
import { createContentHandlers } from '@mocks/handlers/base-content-handlers';

export const stockHandlers = createContentHandlers({
  endpoint: API_ENDPOINTS.CONTENT.STOCKS,
  mockData: mockStocks,
  detailData: mockStocksDetail,
});
