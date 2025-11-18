import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';

import { ROUTES } from './routes';
import { AccountPage } from '@pages/AccountPage';
import { Layout } from '@widgets/Layout';

const router = createBrowserRouter([
  {
    path: ROUTES.root,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to={ROUTES.account} replace />,
      },
      {
        path: ROUTES.account,
        element: <AccountPage />,
      },
      {
        path: ROUTES.login,
        element: <AccountPage />,
      },
    ],
  },
]);

export const Router = (): React.JSX.Element => <RouterProvider router={router} />;
