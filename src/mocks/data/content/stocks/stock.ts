import type { StockPreview } from '@shared/api';

export const mockStocks: StockPreview[] = [
  {
    id: 1,
    title: 'Скидка 30% на все услуги',
    status: 'active',
    published: true,
    description: 'Только до конца месяца скидка 30% на все услуги компании',
    icon: '/images/stocks/discount.png',
    created_at: '2024-01-05T14:20:00Z',
    updated_at: '2024-01-05T14:20:00Z',
    created_by: { id: 1, username: 'admin' },
    publish_at: '2024-01-20T00:00:00Z',
    unpublish_at: '2024-02-01T23:59:59Z',
  },
];
