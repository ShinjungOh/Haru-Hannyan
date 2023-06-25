import HomePage from './pages/HomePage';
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';

import Layout from './ui/components/Layout';

const routes = [
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/signin', element: <SigninPage /> },
      { path: '/signup', element: <SignupPage /> },
    ],
  },
];

export default routes;
