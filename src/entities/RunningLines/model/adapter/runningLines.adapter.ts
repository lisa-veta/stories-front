import { createEntityAdapter } from '@reduxjs/toolkit';
import type {
  RunningLine,
} from '@shared/api';

export const runningLinesAdapter = createEntityAdapter({
  selectId: (runningLine: RunningLine) => runningLine.id.toString(),
  sortComparer: (a, b) =>
    new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime(),
});
