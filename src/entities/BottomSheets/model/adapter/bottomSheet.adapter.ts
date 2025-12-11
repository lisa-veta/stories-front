import { createEntityAdapter } from '@reduxjs/toolkit';
import type {
  BottomSheet,
} from '@shared/api';

export const bottomSheetAdapter = createEntityAdapter({
  selectId: (bottomSheet: BottomSheet) => bottomSheet.id.toString(),
  sortComparer: (a, b) =>
    new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime(),
});
