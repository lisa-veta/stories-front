import { createEntityAdapter } from '@reduxjs/toolkit';
import type {
  Banner,
} from '@shared/api';

export const bannerAdapter = createEntityAdapter({
  selectId: (banner: Banner) => banner.id.toString(),
  sortComparer: (a, b) =>
    new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime(),
});
