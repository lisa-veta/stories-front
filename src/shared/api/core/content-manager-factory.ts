// shared/api/core/content-manager-factory.ts
import type {
  Banner,
  BannerPreview,
  RunningLine,
  RunningLinePreview,
  Stock,
  StockPreview,
  BottomSheet,
  BottomSheetPreview,
} from '../types';
import  { ContentManager } from '@shared/api/core/content-manager.ts';
import  { StoriesManager } from '@shared/api/core/stories/stories-manager.ts';

export class ContentManagerFactory {
  createBannersManager(): ContentManager<Banner, BannerPreview> {
    return new ContentManager('/banners');
  }

  createRunningLinesManager(): ContentManager<RunningLine, RunningLinePreview> {
    return new ContentManager('/running-lines');
  }

  createStocksManager(): ContentManager<Stock, StockPreview> {
    return new ContentManager('/stocks');
  }

  createBottomSheetsManager(): ContentManager<BottomSheet, BottomSheetPreview> {
    return new ContentManager('/bottom-sheets');
  }

  createStoriesManager(): StoriesManager {
    return new StoriesManager();
  }
}
