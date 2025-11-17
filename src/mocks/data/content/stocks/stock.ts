import type { StockPreview } from '@shared/api';

export const mockStocks: StockPreview[] = [
  {
    id: 1,
    title: 'Скидка 30% на все услуги',
    status: 'active',
    published: true,
    description: 'Только до конца месяца скидка 30% на все услуги компании',
    icon: '/images/stocks/discount.png',
    preview_url: '/images/stocks/january-sale.jpg',
    created_at: '2024-01-05T14:20:00Z',
    updated_at: '2024-01-05T14:20:00Z',
    created_by: { id: 1, username: 'admin' },
  },
];
