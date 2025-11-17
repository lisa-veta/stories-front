export const ROUTES = {
  root: '/',
  account: '/account',
} as const;

export type Routes = keyof typeof ROUTES;
