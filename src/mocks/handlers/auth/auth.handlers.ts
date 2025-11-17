import { http, HttpResponse } from 'msw';
import { API_ENDPOINTS, type ApiResponse } from '@shared/api';
import { mockLoginResponse } from '@mocks/data';

export const authHandlers = [
  http.post(API_ENDPOINTS.AUTH.LOGIN, () => {
    return HttpResponse.json<ApiResponse<typeof mockLoginResponse>>({
      data: mockLoginResponse,
    });
  }),

  http.post(API_ENDPOINTS.AUTH.LOGOUT, () => {
    return HttpResponse.json<ApiResponse<{ message: string }>>({
      data: { message: 'Successfully logged out' },
    });
  }),
];
