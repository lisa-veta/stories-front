import { createEntityAdapter } from '@reduxjs/toolkit';
import type {
  Stock,
} from '@shared/api';

export const stocksAdapter = createEntityAdapter({
  selectId: (stock: Stock) => stock.id.toString(),
  sortComparer: (a, b) =>
    new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime(),
});
