import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider, useTheme } from '@emotion/react';

import routes from './routes';
import GlobalStyle from './styles/GlobalStyle';
import { Page } from './ui/components/Layout/index';

const router = createBrowserRouter(routes);

export default function App() {
  const theme = useTheme();
  return (
    <Page>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
        <GlobalStyle />
      </ThemeProvider>
    </Page>
  );
}
