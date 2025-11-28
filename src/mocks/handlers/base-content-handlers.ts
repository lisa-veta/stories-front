// handlers.ts
import { http, HttpResponse, HttpHandler } from 'msw';
import { type ApiResponse, type ListResponse } from '@shared/api';
import { baseURL } from '@mocks/config/constants';

export interface ContentHandlersConfig<T, U = T> {
  endpoint: string;
  mockData: T[];
  detailData?: U[];
}

export function createContentHandlers<T, U = T>(config: ContentHandlersConfig<T, U>): HttpHandler[] {
  const { endpoint, mockData, detailData = mockData as unknown as U[] } = config;

  return [
    // GET /endpoint - получение списка
    http.get(`${baseURL}${endpoint}`, () => {
      const responseData: ListResponse<T> = {
        data: mockData,
      };
      return HttpResponse.json(responseData);
    }),

    // GET /endpoint/:id - получение по ID
    http.get(`${baseURL}${endpoint}/:id`, ({ params }) => {
      const { id } = params;
      const itemId = parseInt(id as string);

      const item = detailData.find((item: any) => item.id === itemId);
      console.log('item', item);
      if (!item) {
        return HttpResponse.json(
          { error: 'Item not found' },
          { status: 404 },
        );
      }

      const responseData: ApiResponse<U> = {
        data: item,
      };

      return HttpResponse.json(responseData);
    }),

    // POST /endpoint - создание
    http.post(`${baseURL}${endpoint}`, async ({ request }) => {
      const newItem = await request.json() as U;

      const responseData: ApiResponse<U> = {
        data: newItem,
      };

      return HttpResponse.json(responseData, { status: 201 });
    }),

    // PUT /endpoint/:id - обновление
    http.put(`${baseURL}${endpoint}/:id`, async ({ params, request }) => {
      const { id } = params;
      const itemId = parseInt(id as string);
      const updates = await request.json() as Partial<U>;

      const existingItem = detailData.find((item: any) => item.id === itemId);
      if (!existingItem) {
        return HttpResponse.json(
          { error: 'Item not found' },
          { status: 404 },
        );
      }

      const responseData: ApiResponse<U> = {
        data: { ...existingItem, ...updates } as U,
      };

      return HttpResponse.json(responseData);
    }),

    // DELETE /endpoint/:id - удаление
    http.delete(`${baseURL}${endpoint}/:id`, ({ params }) => {
      const { id } = params;
      const itemId = parseInt(id as string);

      if (!detailData.find((item: any) => item.id === itemId)) {
        return HttpResponse.json(
          { error: 'Item not found' },
          { status: 404 },
        );
      }

      const responseData: ApiResponse<{ message: string }> = {
        data: { message: 'Item deleted successfully' },
      };

      return HttpResponse.json(responseData);
    }),
  ];
}
