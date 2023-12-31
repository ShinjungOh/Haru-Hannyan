import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import { PATH } from '@lib/const/path';
import { OverlayProvider } from '@ui/components/overlay/OverlayProvider';
import routes from './routes';

const context = describe;

describe('App', () => {
  function renderRouter(path: string) {
    const router = createMemoryRouter(routes, { initialEntries: [path] });
    render(
      <OverlayProvider>
        <RouterProvider router={router} />
      </OverlayProvider>,
    );
  }

  context('When the current page is "/"', () => {
    it('renders the home page', () => {
      renderRouter(PATH.HOME);

      screen.getAllByText(/하루한냥/);
    });
  });

  context('When the current page is "/signin"', () => {
    it('renders the signin page', () => {
      renderRouter(PATH.SIGN_IN);

      screen.getAllByText(/로그인/);
    });
  });

  context('When the current page is "/signup"', () => {
    it('renders the signup page', () => {
      renderRouter(PATH.SIGN_UP);

      screen.getAllByText(/회원가입/);
    });
  });

  context('When the current page is "/calendar"', () => {
    it('renders the calendar page', () => {
      renderRouter(PATH.CALENDAR);

      screen.getAllByText('월');
      screen.getAllByText('수');
      screen.getAllByText('금');
    });
  });
});
