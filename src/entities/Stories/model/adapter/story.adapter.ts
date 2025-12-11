import { createEntityAdapter } from '@reduxjs/toolkit';
import type {
  Story,
} from '@shared/api';

export const storyAdapter = createEntityAdapter({
  selectId: (story: Story) => story.id.toString(),
  sortComparer: (a, b) =>
    new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime(),
});
