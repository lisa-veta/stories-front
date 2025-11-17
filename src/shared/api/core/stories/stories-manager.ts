import { ContentManager } from '@shared/api/core/content-manager.ts';
import { type ApiResponse, baseAPI, type Slide, type Story, type StoryPreview } from '@shared/api';

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
    data: Partial<Slide>,
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

  async createSlide(storyId: string | number, data: Omit<Slide, 'id'>): Promise<Slide> {
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
}
