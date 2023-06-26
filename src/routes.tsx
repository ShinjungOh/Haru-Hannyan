import { PATH } from './lib/const/path';
import HomePage from './pages/HomePage';
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';

import Layout from './ui/components/Layout';

const routes = [
  {
    element: <Layout />,
    children: [
      { path: PATH.HOME, element: <HomePage /> },
      { path: PATH.SIGN_IN, element: <SigninPage /> },
      { path: PATH.SIGN_UP, element: <SignupPage /> },
    ],
  },
];

export default routes;
