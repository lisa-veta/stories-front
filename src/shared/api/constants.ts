export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
  },
  CONTENT: {
    STORIES: '/stories',
    BANNERS: '/banners',
    RUNNING_LINES: '/running-lines',
    STOCKS: '/stocks',
    BOTTOM_SHEETS: '/bottom-sheets',
  },
} as const;
