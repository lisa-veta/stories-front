import type { BannerPreview } from '@shared/api';

export const mockBanners: BannerPreview[] = [
  {
    id: 1,
    title: 'Специальное предложение',
    status: 'active',
    published: true,
    preview_url: '/images/banners/special-offer.jpg',
    button_text: 'Узнать больше',
    button_url: 'https://example.com/promo',
    color: '#ff6b6b',
    created_at: '2024-01-18T12:00:00Z',
    updated_at: '2024-01-18T12:00:00Z',
    created_by: { id: 1, username: 'admin' },
  },
];
