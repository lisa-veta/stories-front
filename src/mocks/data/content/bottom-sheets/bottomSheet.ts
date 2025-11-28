import type { BottomSheetPreview } from '@shared/api';

export const mockBottomSheets: BottomSheetPreview[] = [
  {
    id: 1,
    title: 'Новые возможности',
    status: 'active',
    published: true,
    description: 'Мы добавили новые функции в мобильное приложение',
    button_text: 'Обновить',
    created_at: '2024-01-12T11:30:00Z',
    updated_at: '2024-01-12T11:30:00Z',
    created_by: { id: 1, username: 'admin' },
    publish_at: '2024-01-20T00:00:00Z',
    unpublish_at: '2024-02-01T23:59:59Z',
  },
];
