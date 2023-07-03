import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Global } from '@emotion/react';

import globalStyle from '@ui/styles/globalStyle.css';
import routes from './routes';

const router = createBrowserRouter(routes);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Global styles={globalStyle} />
    </>
  );
}
