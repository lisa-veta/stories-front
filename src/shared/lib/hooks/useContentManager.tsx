import { useEffect, useState } from 'react';
import type { ContentPreview, ListResponse } from '@shared/api';
import { apiContainer } from '@shared/api/core/api-container.ts';
import { UnauthorizedError } from '@shared/api/core/errors.ts';

export const useContentManager = (activeTab: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [content, setContent] = useState<ContentPreview[]>([]);

  useEffect(() => {
    const loadContent = async () => {
      setLoading(true);
      let response: ListResponse<ContentPreview>;
      try {
        switch (activeTab) {
        case 'banners':
          response = await apiContainer.banners.getList();
          break;
        case 'stories':
          response = await apiContainer.stories.getList();
          break;
        case 'stocks':
          response = await apiContainer.stocks.getList();
          break;
        case 'running-lines':
          response = await apiContainer.runningLines.getList();
          break;
        case 'bottom-sheet':
          response = await apiContainer.bottomSheets.getList();
          break;
        case 'onboarding-stories':
          response = await apiContainer.onboardingStories.getList();
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
        setTimeout(() => setLoading(false), 2000);
      }
    };
    loadContent();
  }, [activeTab]);

  return { content, loading, error };
};
