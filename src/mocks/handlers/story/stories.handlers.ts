import { API_ENDPOINTS, type ApiResponse, type Slide } from '@shared/api';
import { mockStories, mockStoryDetails } from '@mocks/data';
import { createContentHandlers } from '@mocks/handlers/base-content-handlers';
import { http, HttpResponse } from 'msw';
import { baseURL } from '@mocks/config/constants';

export const storiesHandlers = createContentHandlers({
  endpoint: API_ENDPOINTS.CONTENT.STORIES,
  mockData: mockStories,
  detailData: mockStoryDetails,
});

export const storiesSpecificHandlers = [
  // GET /stories/:id/slides - получение слайдов истории
  http.get(`${baseURL}/stories/:id/slides`, ({ params }) => {
    const { id } = params;
    const storyId = parseInt(id as string);

    const story = mockStoryDetails.find(story => story.id === storyId);

    if (!story) {
      return HttpResponse.json(
        { error: 'Story not found' },
        { status: 404 },
      );
    }

    const responseData: ApiResponse<Slide[]> = {
      data: story.slides,
    };

    return HttpResponse.json(responseData);
  }),

  // POST /stories/:id/slides - создание слайда
  http.post(`${baseURL}/stories/:id/slides`, async ({ params, request }) => {
    const { id } = params;
    const storyId = parseInt(id as string);
    const newSlide = await request.json() as Slide;

    const story = mockStoryDetails.find(story => story.id === storyId);
    if (!story) {
      return HttpResponse.json(
        { error: 'Story not found' },
        { status: 404 },
      );
    }

    // Генерируем ID для нового слайда
    const maxId = Math.max(...story.slides.map(s => s.id));
    const createdSlide: Slide = {
      ...newSlide,
      id: maxId + 1,
      story_id: storyId,
    };

    story.slides.push(createdSlide);

    const responseData: ApiResponse<Slide> = {
      data: createdSlide,
    };

    return HttpResponse.json(responseData, { status: 201 });
  }),

  // PUT /stories/:id/slides/:slideId - обновление слайда
  http.put(`${baseURL}/stories/:id/slides/:slideId`, async ({ params, request }) => {
    const { id, slideId } = params;
    const storyId = parseInt(id as string);
    const slideIdNum = parseInt(slideId as string);
    const updates = await request.json() as Partial<Slide>;

    const story = mockStoryDetails.find(story => story.id === storyId);
    if (!story) {
      return HttpResponse.json(
        { error: 'Story not found' },
        { status: 404 },
      );
    }

    const slideIndex = story.slides.findIndex(slide => slide.id === slideIdNum);
    if (slideIndex === -1) {
      return HttpResponse.json(
        { error: 'Slide not found' },
        { status: 404 },
      );
    }

    const updatedSlide: Slide = {
      ...story.slides[slideIndex],
      ...updates,
    };
    story.slides[slideIndex] = updatedSlide;

    const responseData: ApiResponse<Slide> = {
      data: updatedSlide,
    };

    return HttpResponse.json(responseData);
  }),

  // DELETE /stories/:id/slides/:slideId - удаление слайда
  http.delete(`${baseURL}/stories/:id/slides/:slideId`, ({ params }) => {
    const { id, slideId } = params;
    const storyId = parseInt(id as string);
    const slideIdNum = parseInt(slideId as string);

    const story = mockStoryDetails.find(story => story.id === storyId);
    if (!story) {
      return HttpResponse.json(
        { error: 'Story not found' },
        { status: 404 },
      );
    }

    const slideIndex = story.slides.findIndex(slide => slide.id === slideIdNum);
    if (slideIndex === -1) {
      return HttpResponse.json(
        { error: 'Slide not found' },
        { status: 404 },
      );
    }

    story.slides.splice(slideIndex, 1);

    const responseData: ApiResponse<{ message: string }> = {
      data: { message: 'Slide deleted successfully' },
    };

    return HttpResponse.json(responseData);
  }),
];
