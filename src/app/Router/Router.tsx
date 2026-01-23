import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';

import { ROUTES } from './routes';
import { AccountPage } from '@pages/AccountPage';
import { Layout } from '@widgets/Layout';
import { EditorPage } from '@pages/EditorPage';

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
      {
        path: ROUTES.edit,
        element: <EditorPage />,
      },
    ],
  },
]);

export const Router = (): React.JSX.Element => <RouterProvider router={router} />;
