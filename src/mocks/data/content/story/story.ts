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

export const mockStoryDetail: Story = {
  ...mockStories[0],

  title_position: 'middle',
  title_class: 'white-on-blue',
  subTitle: 'Специальные предложения',

  cta_text: 'Получить подарок',
  cta_url: 'https://example.com/gift',
  cta_class: 'btn-primary',
  show_cta_on_cover: true,

  action: 'link',
  previewUrl: 'https://example.com/gift',

  effect_id: 1,
  filter_id: 1,

  slides: [
    {
      id: 1,
      story_id: 1,
      sort: 1,

      elements: [
        {
          id: 'el-1',
          type: 'text',
          content: '🎄 С Новым Годом! Специальные предложения для вас',
          xPercent: 0.1,
          yPercent: 0.4,
          style: {
            textColor: '#ffffff',
            backgroundColor: 'transparent',
          },
        },
      ],

      isCtaVisible: false,
      isCallTaskVisible: false,
      useVideo: false,
      image_url: '/images/stories/slide1.jpg',
    },
    {
      id: 2,
      story_id: 1,
      sort: 2,

      elements: [
        {
          id: 'el-2',
          type: 'text',
          content: 'Получите скидку 30% на все тарифы',
          xPercent: 0.1,
          yPercent: 0.7,
          style: {
            textColor: '#000000',
            backgroundColor: '#ffffff',
          },
        },
        {
          id: 'el-3',
          type: 'actionButton',
          content: 'Получить',
          xPercent: 0.3,
          yPercent: 0.85,
          link: 'https://example.com/gift',
          style: {
            textColor: '#ffffff',
            backgroundColor: '#007BFF',
            borderRadius: 8,
          },
        },
      ],

      isCtaVisible: true,
      isCallTaskVisible: false,
      useVideo: false,
      image_url: '/images/stories/slide2.jpg',
    },
  ],
};

export const mockStoryDetail2: Story = {
  ...mockStories[1],

  title_position: 'top',
  title_class: 'default',

  cta_text: 'Узнать подробности',
  cta_url: 'https://example.com/tariffs',
  cta_class: 'btn-secondary',
  show_cta_on_cover: false,

  action: 'story',

  effect_id: 2,
  filter_id: 2,

  slides: [
    {
      id: 3,
      story_id: 2,
      sort: 1,

      elements: [
        {
          id: 'el-4',
          type: 'text',
          content: 'Обновление тарифов. Новые условия с 1 февраля',
          xPercent: 0.1,
          yPercent: 0.5,
          style: {
            textColor: '#ffffff',
            backgroundColor: '#000000',
          },
        },
        {
          id: 'el-5',
          type: 'callButton',
          content: 'Позвонить',
          xPercent: 0.3,
          yPercent: 0.8,
          link: 'tel:+123456789',
          style: {
            textColor: '#ffffff',
            backgroundColor: '#28A745',
            borderRadius: 8,
          },
        },
      ],

      isCtaVisible: false,
      isCallTaskVisible: true,
      useVideo: false,
      image_url: '/images/stories/slide3.jpg',
    },
  ],
};

// Для обработчиков MSW - массив детальных данных
export const mockStoryDetails = [mockStoryDetail, mockStoryDetail2];
