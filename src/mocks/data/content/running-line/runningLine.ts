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
  },
];
