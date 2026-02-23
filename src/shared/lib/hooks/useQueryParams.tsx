import { useLocation } from 'react-router-dom';
import { useMemo } from 'react';

export const useQueryParams = () => {
  const location = useLocation();

  return useMemo(() => {
    const params = new URLSearchParams(location.search);
    return {
      id: params.get('id'),
      type: params.get('type'),
    };
  }, [location.search]);
};
