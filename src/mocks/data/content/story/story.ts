import type { StoryPreview, Story } from '@shared/api';

export const mockStories: StoryPreview[] = [
  {
    id: 1,
    title: 'Новогодняя акция 2024',
    short_title: 'Новый год',
    status: 'active',
    published: true,
    slides_count: 5,
    created_at: '2024-01-15T10:30:00Z',
    updated_at: '2024-01-20T14:25:00Z',
    created_by: { id: 1, username: 'admin' },
    publish_at: '2024-01-20T00:00:00Z',
    unpublish_at: '2024-02-01T23:59:59Z',
    preview_url: 'assets/banner.png',
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
    publish_at: '2024-01-20T00:00:00Z',
    unpublish_at: '2024-02-01T23:59:59Z',
    preview_url: 'assets/banner.png',
  },
];

// Для детальной страницы - используем полный Story
export const mockStoryDetail: Story = {
  ...mockStories[0],
  // Дополнительные поля для полной истории
  title_position: 'middle',
  title_class: 'white-on-blue',
  subTitle: 'Специальные предложения',

  // CTA на уровне истории
  cta_text: 'Получить подарок',
  cta_url: 'https://example.com/gift',
  cta_class: 'btn-primary',
  show_cta_on_cover: true,

  // Действие и ссылки
  action: 'link',
  previewUrl: 'https://example.com/gift',

  // Внешние связи
  effect_id: 1,
  filter_id: 1,

  // Слайды
  slides: [
    {
      id: 1,
      story_id: 1,
      sort: 1,
      text: '🎄 С Новым Годом! Специальные предложения для вас',
      textPosition: 'middle',
      textClass: 'white-on-blue',
      isCtaVisible: false,
      isCallTaskVisible: false,
      useVideo: false,
      image_url: '/images/stories/slide1.jpg',
    },
    {
      id: 2,
      story_id: 1,
      sort: 2,
      text: 'Получите скидку 30% на все тарифы',
      textPosition: 'bottom',
      textClass: 'black-on-white',
      isCtaVisible: true,
      isCallTaskVisible: false,
      useVideo: false,
      image_url: '/images/stories/slide2.jpg',
    },
  ],
};

// Создаем еще одну детальную историю для ID 2
export const mockStoryDetail2: Story = {
  ...mockStories[1],
  // Дополнительные поля для полной истории
  title_position: 'top',
  title_class: 'default',

  // CTA на уровне истории
  cta_text: 'Узнать подробности',
  cta_url: 'https://example.com/tariffs',
  cta_class: 'btn-secondary',
  show_cta_on_cover: false,

  // Действие и ссылки
  action: 'story',

  // Внешние связи
  effect_id: 2,
  filter_id: 2,

  // Слайды
  slides: [
    {
      id: 3,
      story_id: 2,
      sort: 1,
      text: 'Обновление тарифов. Новые условия с 1 февраля',
      textPosition: 'middle',
      textClass: 'white-on-black',
      isCtaVisible: false,
      isCallTaskVisible: true,
      useVideo: false,
      image_url: '/images/stories/slide3.jpg',
    },
  ],
};

// Для обработчиков MSW - массив детальных данных
export const mockStoryDetails = [mockStoryDetail, mockStoryDetail2];
