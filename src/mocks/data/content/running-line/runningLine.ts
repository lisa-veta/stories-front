import type { RunningLinePreview } from '@shared/api';

export const mockRunningLines: RunningLinePreview[] = [
  {
    id: 1,
    title: 'Бегущая строка №1',
    status: 'active',
    published: true,
    text: 'Специальное предложение для новых клиентов!',
    show_btn: true,
    created_at: '2024-01-10T08:00:00Z',
    updated_at: '2024-01-10T08:00:00Z',
    created_by: { id: 1, username: 'admin' },
    publish_at: '2024-01-20T00:00:00Z',
    unpublish_at: '2024-02-01T23:59:59Z',
  },
  {
    id: 2,
    title: 'Бегущая строка №2',
    status: 'active',
    published: true,
    text: 'Специальное',
    show_btn: true,
    created_at: '2024-01-10T08:00:00Z',
    updated_at: '2024-01-10T08:00:00Z',
    created_by: { id: 2, username: 'admin' },
    publish_at: '2024-01-20T00:00:00Z',
    unpublish_at: '2024-02-01T23:59:59Z',
  },
];
