import { http, HttpResponse } from 'msw';
import { API_ENDPOINTS, type ApiResponse } from '@shared/api';
import { mockLoginResponse } from '@mocks/data';
import { baseURL } from '@mocks/config/constants';

export const authHandlers = [
  http.post(`${baseURL}${API_ENDPOINTS.AUTH.LOGIN}`, () => {
    return HttpResponse.json<ApiResponse<typeof mockLoginResponse>>({
      data: mockLoginResponse,
    });
  }),

  http.post(`${baseURL}${API_ENDPOINTS.AUTH.LOGOUT}`, () => {
    return HttpResponse.json<ApiResponse<{ message: string }>>({
      data: { message: 'Successfully logged out' },
    });
  }),
];
