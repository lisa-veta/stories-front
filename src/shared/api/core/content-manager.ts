import { baseAPI } from '../base';
import type { ApiResponse, ListResponse } from '../types';
import { HttpError, UnauthorizedError, ForbiddenError, NotFoundError } from './errors';

export class ContentManager<T, TPreview> {
  protected readonly baseEndpoint: string;

  constructor(baseEndpoint: string) {
    this.baseEndpoint = baseEndpoint;
  }

  protected handleError(error: any): never {
    if (error.response?.status === 401) {
      throw new UnauthorizedError(error.response.data?.message || 'Unauthorized');
    } else if (error.response?.status === 403) {
      throw new ForbiddenError(error.response.data?.message || 'Forbidden');
    } else if (error.response?.status === 404) {
      throw new NotFoundError(error.response.data?.message || 'Not Found');
    } else if (error.response) {
      throw new HttpError(
        error.response.data?.message || 'Request failed',
        error.response.status,
      );
    } else {
      throw new HttpError(error.message || 'Network error');
    }
  }

  async getList(): Promise<ListResponse<TPreview>> {
    try {
      const response = await baseAPI.get<ListResponse<TPreview>>(this.baseEndpoint);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async getById(id: string | number): Promise<T> {
    try {
      const response = await baseAPI.get<ApiResponse<T>>(`${this.baseEndpoint}/${id}`);
      return response.data.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async create(data: Omit<T, 'id' | 'created_at' | 'updated_at'>): Promise<T> {
    try {
      const response = await baseAPI.post<ApiResponse<T>>(this.baseEndpoint, data);
      return response.data.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async update(id: string | number, data: Partial<T>): Promise<T> {
    try {
      const response = await baseAPI.put<ApiResponse<T>>(`${this.baseEndpoint}/${id}`, data);
      return response.data.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async delete(id: string | number): Promise<{ message: string }> {
    try {
      const response = await baseAPI.delete<ApiResponse<{ message: string }>>(
        `${this.baseEndpoint}/${id}`,
      );
      return response.data.data;
    } catch (error) {
      this.handleError(error);
    }
  }
}
