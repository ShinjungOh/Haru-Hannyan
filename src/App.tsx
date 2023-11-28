import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Global } from '@emotion/react';
import { OverlayProvider } from '@ui/components/overlay/OverlayProvider';
import { LoadingBar } from '@ui/components/common';
import { globalStyle } from '@ui/styles';
import { useLoadingStore } from '@lib/store';
import routes from './routes';

const router = createBrowserRouter(routes);

export default function App() {
  const isLoading = useLoadingStore((state) => state.isLoading);

  return (
    <>
      <OverlayProvider>
        {isLoading && <LoadingBar />}
        <RouterProvider router={router} />
        <Global styles={globalStyle} />
      </OverlayProvider>
    </>
  );
}
