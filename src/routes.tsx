import { PATH } from '@lib/const/path';
import RouterLayout from '@ui/components/layout/RouterLayout';
import HomePage from './pages/HomePage';
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';
import ProtectedRoute from './pages/ProtectedRoute';
import CalendarPage from './pages/CalendarPage';
import TimelinePage from './pages/TimelinePage';
import ReportPage from './pages/ReportPage';
import SettingPage from './pages/SettingPage';
import AuthKakaoPage from './pages/AuthKakaoPage';
import WritePostPage from './pages/WritePostPage';
import EditPostPage from './pages/EditPostPage';

const routes = [
  {
    element: <RouterLayout />,
    children: [
      { path: PATH.HOME, element: <HomePage /> },
      { path: PATH.SIGN_IN, element: <SigninPage /> },
      { path: PATH.SIGN_UP, element: <SignupPage /> },
      { path: PATH.OAUTH_KAKAO, element: <AuthKakaoPage /> },
      {
        path: PATH.CALENDAR,
        element: (
          <ProtectedRoute>
            <CalendarPage />
          </ProtectedRoute>
        ),
      },
      {
        path: PATH.TIMELINE,
        element: (
          <ProtectedRoute>
            <TimelinePage />
          </ProtectedRoute>
        ),
      },
      {
        path: PATH.REPORT,
        element: (
          <ProtectedRoute>
            <ReportPage />
          </ProtectedRoute>
        ),
      },
      {
        path: PATH.SETTING,
        element: (
          <ProtectedRoute>
            <SettingPage />
          </ProtectedRoute>
        ),
      },
      { path: PATH.WRITE, element: <WritePostPage /> },
      { path: PATH.EDIT, element: <EditPostPage /> },
    ],
  },
];

export default routes;
