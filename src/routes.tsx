import { PATH } from './lib/const/path';
import Layout from './ui/components/Layout';

import HomePage from './pages/HomePage';
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';
import CalendarPage from './pages/CalendarPage';
import SettingPage from './pages/SettingPage';
import ReportPage from './pages/ReportPage';
import TimelinePage from './pages/TimelinePage';

const routes = [
  {
    element: <Layout />,
    children: [
      { path: PATH.HOME, element: <HomePage /> },
      { path: PATH.SIGN_IN, element: <SigninPage /> },
      { path: PATH.SIGN_UP, element: <SignupPage /> },
      { path: PATH.CALENDAR, element: <CalendarPage /> },
      { path: PATH.TIMELINE, element: <TimelinePage /> },
      { path: PATH.REPORT, element: <ReportPage /> },
      { path: PATH.SETTING, element: <SettingPage /> },
    ],
  },
];

export default routes;
