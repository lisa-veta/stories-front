import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';

import { ROUTES } from './routes';
import { AccountPage } from '@pages/AccountPage';

const router = createBrowserRouter([
  {
    path: ROUTES.root,
    element: <Navigate to={ROUTES.account} replace />,
  },
  {
    path: ROUTES.account,
    element: <AccountPage />,
  },
]);

export const Router = (): React.JSX.Element => <RouterProvider router={router} />;
