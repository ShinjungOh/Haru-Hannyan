import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import routes from './routes';
import { PATH } from './lib/const/path';

const context = describe;

describe('App', () => {
  function renderRouter(path: string) {
    const router = createMemoryRouter(routes, { initialEntries: [path] });
    render(<RouterProvider router={router} />);
  }

  context('When the current page is "/"', () => {
    it('renders the home page', () => {
      renderRouter(PATH.HOME);

      screen.getByText(/home/);
    });
  });
});
