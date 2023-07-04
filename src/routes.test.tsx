import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import { PATH } from '@lib/const/path';
import routes from './routes';

const context = describe;

describe('App', () => {
  function renderRouter(path: string) {
    const router = createMemoryRouter(routes, { initialEntries: [path] });
    render(<RouterProvider router={router} />);
  }

  context('When the current page is "/"', () => {
    it('renders the home page', () => {
      renderRouter(PATH.HOME);

      screen.getByText(/하루한냥/);
    });
  });

  context('When the current page is "/signin"', () => {
    it('renders the signin page', () => {
      renderRouter(PATH.SIGN_IN);

      screen.getAllByText(/로그인/);
    });
  });

  // context('When the current page is "/signup"', () => {
  //   it('renders the signup page', () => {
  //     renderRouter(PATH.SIGN_UP);
  //
  //     screen.getByText(/회원가입/);
  //   });
  // });
});
