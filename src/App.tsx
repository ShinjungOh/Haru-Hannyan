import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Global } from '@emotion/react';

import { OverlayProvider } from '@ui/components/overlay/OverlayProvider';
import globalStyle from '@ui/styles/globalStyle.css';
import routes from './routes';

const router = createBrowserRouter(routes);

export default function App() {
  return (
    <OverlayProvider>
      <RouterProvider router={router} />
      <Global styles={globalStyle} />
    </OverlayProvider>
  );
}
