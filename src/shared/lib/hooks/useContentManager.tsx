import { useEffect, useState } from 'react';
import type { ContentPreview, ListResponse } from '@shared/api';
import { apiContainer } from '@shared/api/core/api-container';
import { UnauthorizedError } from '@shared/api/core/errors';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';
import { bannerActions } from '@entities/Banners/model/slice/banner.slice';
import { storyActions } from '@entities/Stories/model/slice/story.slice';
import { stockActions } from '@entities/Stocks/model/slice/stocks.slice';
import { bottomSheetActions } from '@entities/BottomSheets/model/slice/bottomSheet.slice';
import { runningLineActions } from '@entities/RunningLines/model/slice/runningLines.slice';
import { onboardingStoryActions } from '@entities/OnboardingStories/model/slice/onboardingStories.slice';

export const useContentManager = (activeTab: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [content, setContent] = useState<ContentPreview[]>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const loadContent = async () => {
      setLoading(true);
      let response: ListResponse<ContentPreview>;
      try {
        switch (activeTab) {
        case 'banners':
          response = await apiContainer.banners.getList();
          dispatch(bannerActions.bannersAdd(response.data as any));
          break;
        case 'stories':
          response = await apiContainer.stories.getList();
          dispatch(storyActions.storiesAdd(response.data as any));
          break;
        case 'stocks':
          response = await apiContainer.stocks.getList();
          dispatch(stockActions.stocksAdd(response.data as any));
          break;
        case 'running-lines':
          response = await apiContainer.runningLines.getList();
          dispatch(runningLineActions.runningLinesAdd(response.data as any));
          break;
        case 'bottom-sheet':
          response = await apiContainer.bottomSheets.getList();
          dispatch(bottomSheetActions.bottomSheetsAdd(response.data as any));
          break;
        case 'onboarding-stories':
          response = await apiContainer.onboardingStories.getList();
          dispatch(onboardingStoryActions.onboardingStoriesAdd(response.data as any));
          break;
        default:
          setContent([]);
          return;
        }

        setContent(response.data);
      } catch (e) {
        if (e instanceof UnauthorizedError) {
          window.location.href = '/login';
          return;
        }
        setError(`Failed to load ${activeTab}${e}`);
      } finally {
        setTimeout(() => setLoading(false), 1000);
      }
    };
    loadContent();
  }, [activeTab]);

  return { content, loading, error };
};
