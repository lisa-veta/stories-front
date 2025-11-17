import type { StoryPreview } from '@shared/api';

export const mockStories: StoryPreview[] = [
  {
    id: 1,
    title: 'Новогодняя акция 2024',
    short_title: 'Новый год',
    status: 'active',
    published: true,
    preview_url: '/images/stories/new-year-preview.jpg',
    slides_count: 5,
    created_at: '2024-01-15T10:30:00Z',
    updated_at: '2024-01-20T14:25:00Z',
    created_by: { id: 1, username: 'admin' },
    publish_at: '2024-01-20T00:00:00Z',
    unpublish_at: '2024-02-01T23:59:59Z',
    tag: { id: 1, name: 'Акции' },
  },
  {
    id: 2,
    title: 'Обновление тарифов',
    short_title: 'Тарифы',
    status: 'draft',
    published: false,
    slides_count: 3,
    created_at: '2024-01-22T09:15:00Z',
    updated_at: '2024-01-22T09:15:00Z',
    created_by: { id: 2, username: 'manager' },
  },
];
