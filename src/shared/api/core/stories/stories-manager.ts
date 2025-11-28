import { ContentManager } from '@shared/api/core/content-manager.ts';
import {
  type ApiResponse,
  baseAPI,
  type CreateSlideData,
  type Slide,
  type Story,
  type StoryPreview,
  type UpdateSlideData,
} from '@shared/api';

export class StoriesManager extends ContentManager<Story, StoryPreview> {
  constructor() {
    super('/stories');
  }

  async getSlides(storyId: string | number): Promise<Slide[]> {
    try {
      const response = await baseAPI.get<ApiResponse<Slide[]>>(
        `${this.baseEndpoint}/${storyId}/slides`,
      );
      return response.data.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async updateSlide(
    storyId: string | number,
    slideId: string | number,
    data: UpdateSlideData,
  ): Promise<Slide> {
    try {
      const response = await baseAPI.put<ApiResponse<Slide>>(
        `${this.baseEndpoint}/${storyId}/slides/${slideId}`,
        data,
      );
      return response.data.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async createSlide(storyId: string | number, data: CreateSlideData): Promise<Slide> {
    try {
      const response = await baseAPI.post<ApiResponse<Slide>>(
        `${this.baseEndpoint}/${storyId}/slides`,
        data,
      );
      return response.data.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async deleteSlide(storyId: string | number, slideId: string | number): Promise<{ message: string }> {
    try {
      const response = await baseAPI.delete<ApiResponse<{ message: string }>>(
        `${this.baseEndpoint}/${storyId}/slides/${slideId}`,
      );
      return response.data.data;
    } catch (error) {
      this.handleError(error);
    }
  }
}
