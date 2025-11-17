import { API_ENDPOINTS, type ApiResponse, baseAPI, type User } from '@shared/api';

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  user: User;
  access_token: string;
  refresh_token?: string;
  expires_in: number;
}

export const authAPI = {
  async login(credentials: LoginRequest): Promise<LoginResponse> {
    const response = await baseAPI.post<ApiResponse<LoginResponse>>(
      API_ENDPOINTS.AUTH.LOGIN,
      credentials,
    );

    if (response.data.data.access_token) {
      localStorage.setItem('auth-token', response.data.data.access_token);
    }

    return response.data.data;
  },

  async logout(): Promise<{ message: string }> {
    const response = await baseAPI.post<ApiResponse<{ message: string }>>(
      API_ENDPOINTS.AUTH.LOGOUT,
    );

    localStorage.removeItem('auth-token');

    return response.data.data;
  },
};
