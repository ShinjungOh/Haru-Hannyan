import { PATH } from '@lib/const/path';
import RouterLayout from './ui/components/RouterLayout';
import HomePage from './pages/HomePage';
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';
import CalendarPage from './pages/CalendarPage';
import TimelinePage from './pages/TimelinePage';
import ReportPage from './pages/ReportPage';
import SettingPage from './pages/SettingPage';
import AuthKakaoPage from './pages/AuthKakaoPage';

const routes = [
  {
    element: <RouterLayout />,
    children: [
      { path: PATH.HOME, element: <HomePage /> },
      { path: PATH.SIGN_IN, element: <SigninPage /> },
      { path: PATH.SIGN_UP, element: <SignupPage /> },
      { path: PATH.CALENDAR, element: <CalendarPage /> },
      { path: PATH.TIMELINE, element: <TimelinePage /> },
      { path: PATH.REPORT, element: <ReportPage /> },
      { path: PATH.SETTING, element: <SettingPage /> },
      { path: PATH.OAUTH_KAKAO, element: <AuthKakaoPage /> },
    ],
  },
];

export default routes;
