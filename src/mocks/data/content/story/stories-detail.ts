import type { Story } from '@shared/api';
import { mockStories } from '@mocks/data/content/story/story.ts';

export const mockStoryDetail: Story = {
  id: 1,
  title: 'Новогодняя акция 2024',
  short_title: 'Новый год',
  status: 'active',
  published: true,
  preview_url: '/images/stories/new-year-preview.jpg',
  slides_count: 2,
  created_at: '2024-01-15T10:30:00Z',
  updated_at: '2024-01-20T14:25:00Z',
  created_by: { id: 1, username: 'admin' },
  publish_at: '2024-01-20T00:00:00Z',
  unpublish_at: '2024-02-01T23:59:59Z',
  tag: { id: 1, name: 'Акции' },
  cta_text: 'Получить подарок',
  cta_url: 'https://example.com/gift',
  cta_class: 'btn-primary',
  show_cta_on_cover: true,
  tag_id: 1,
  slides: [
    {
      id: 1,
      story_id: 1,
      sort: 1,
      html_content: '<div class="slide"><h1>🎄 С Новым Годом!</h1><p>Специальные предложения для вас</p></div>',
      css_styles: '.slide { background: linear-gradient(135deg, #1a5f23, #d4af37); color: white; }',
      is_cta_visible: false,
      is_calltask_visible: false,
      metadata: { theme: 'christmas' },
      created_at: '2024-01-15T10:35:00Z',
      updated_at: '2024-01-15T10:35:00Z',
    },
    {
      id: 2,
      story_id: 1,
      sort: 2,
      html_content: '<div class="slide"><h2>Получите скидку 30%</h2><button>Получить</button></div>',
      css_styles: '.slide { background: #2c3e50; color: white; }',
      is_cta_visible: true,
      is_calltask_visible: false,
      metadata: { theme: 'offer' },
      created_at: '2024-01-15T10:40:00Z',
      updated_at: '2024-01-15T10:40:00Z',
    },
  ],
};

// Создаем еще одну детальную историю для ID 2
export const mockStoryDetail2: Story = {
  ...mockStories[1],
  cta_text: 'Узнать подробности',
  cta_url: 'https://example.com/tariffs',
  cta_class: 'btn-secondary',
  show_cta_on_cover: false,
  tag_id: 2,
  slides: [
    {
      id: 3,
      story_id: 2,
      sort: 1,
      html_content: '<div class="slide"><h1>Обновление тарифов</h1><p>Новые условия с 1 февраля</p></div>',
      css_styles: '.slide { background: #34495e; color: white; }',
      is_cta_visible: false,
      is_calltask_visible: false,
      metadata: { theme: 'tariffs' },
      created_at: '2024-01-22T09:20:00Z',
      updated_at: '2024-01-22T09:20:00Z',
    },
  ],
};
