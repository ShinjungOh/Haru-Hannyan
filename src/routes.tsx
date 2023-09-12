import { PATH } from '@lib/const/path';
import { RouterLayout } from '@ui/components/layout';
import {
  AuthKakaoPage,
  CalendarPage,
  EditPostPage,
  HomePage,
  ProtectedRoute,
  ReportPage,
  SettingPage,
  SigninPage,
  SignupPage,
  TimelinePage,
  WritePostPage,
} from './pages';

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
