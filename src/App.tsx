import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import routes from './routes';
import GlobalStyle from './styles/GlobalStyle';
import { Page } from './ui/components/Layout/index';

const router = createBrowserRouter(routes);

export default function App() {
  return (
    <Page>
      <GlobalStyle />
      <RouterProvider router={router} />
    </Page>
  );
}
