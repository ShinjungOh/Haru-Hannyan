import { PATH } from '@lib/const/path';
import { RouterLayout } from '@ui/components/layout';
import {
  AuthKakaoPage,
  CalendarPage,
  EditPostPage,
  HomePage,
  ProtectedRoute,
  QuestionPage,
  ReportPage,
  SettingPage,
  SigninPage,
  SignupPage,
  TestResultPage,
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
        path: PATH.QUESTION,
        element: (
          <ProtectedRoute>
            <QuestionPage />
          </ProtectedRoute>
        ),
      },
      {
        path: PATH.RESULT,
        element: (
          <ProtectedRoute>
            <TestResultPage />
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
      {
        path: PATH.WRITE,
        element: (
          <ProtectedRoute>
            <WritePostPage />
          </ProtectedRoute>
        ),
      },
      {
        path: PATH.EDIT,
        element: (
          <ProtectedRoute>
            <EditPostPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
];

export default routes;
