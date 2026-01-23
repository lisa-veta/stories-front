export const ROUTES = {
  root: '/',
  account: '/account',
  login: '/login',
  edit: '/edit',
} as const;

export type Routes = keyof typeof ROUTES;
