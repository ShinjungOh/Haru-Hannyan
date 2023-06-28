import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Global } from '@emotion/react';

import routes from './routes';
import globalStyle from './ui/styles/globalStyle.css';
import { Page } from './ui/components/Layout/index';

const router = createBrowserRouter(routes);

export default function App() {
  return (
    <Page>
      <RouterProvider router={router} />
      <Global styles={globalStyle} />
    </Page>
  );
}
