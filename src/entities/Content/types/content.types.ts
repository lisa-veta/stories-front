import type { Banner, Story, Stock, RunningLine, BottomSheet, OnboardingStory } from '@shared/api';
import { EntityState } from '@reduxjs/toolkit';

export type ContentType =
  | 'banners'
  | 'stories'
  | 'stocks'
  | 'runningLines'
  | 'bottomSheets'
  | 'onboardingStories';

export type ContentStatus = 'draft' | 'active' | 'archived';

export interface ContentFilters {
  statuses: ContentStatus[];
  search: string;
  dateRange: [string | null, string | null];
  projectTypes: string[];
}

export interface ContentSchema {
  banners: EntityState<Banner, string>;
  stories: EntityState<Story, string>;
  stocks: EntityState<Stock, string>;
  runningLines: EntityState<RunningLine, string>;
  bottomSheets: EntityState<BottomSheet, string>;
  onboardingStories: EntityState<OnboardingStory, string>;
}

export interface AuthSchema {

}