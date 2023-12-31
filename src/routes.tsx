import { PATH } from '@lib/const/path';
import { RouterLayout } from '@ui/components/layout';
import {
  AuthKakaoPage,
  CalendarPage,
  EditPostPage,
  ErrorPage,
  HomePage,
  ModifyNamePage,
  ModifyPasswordPage,
  PrivacyPolicyPage,
  ProtectedRoute,
  QuestionPage,
  ReportItemPage,
  ReportListPage,
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
        path: PATH.CALENDAR_WRITE,
        element: (
          <ProtectedRoute>
            <WritePostPage />
          </ProtectedRoute>
        ),
      },
      {
        path: PATH.CALENDAR_EDIT,
        element: (
          <ProtectedRoute>
            <EditPostPage />
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
        path: PATH.REPORT_QUESTION,
        element: (
          <ProtectedRoute>
            <QuestionPage />
          </ProtectedRoute>
        ),
      },
      {
        path: PATH.REPORT_ANSWER,
        element: (
          <ProtectedRoute>
            <ReportListPage />
          </ProtectedRoute>
        ),
      },
      {
        path: PATH.REPORT_DETAIL,
        element: (
          <ProtectedRoute>
            <ReportItemPage />
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
        path: PATH.SETTING_MODIFY_NAME,
        element: (
          <ProtectedRoute>
            <ModifyNamePage />
          </ProtectedRoute>
        ),
      },
      {
        path: PATH.SETTING_MODIFY_PASSWORD,
        element: (
          <ProtectedRoute>
            <ModifyPasswordPage />
          </ProtectedRoute>
        ),
      },
      {
        path: PATH.SETTING_PRIVACY,
        element: (
          <ProtectedRoute>
            <PrivacyPolicyPage />
          </ProtectedRoute>
        ),
      },
      {
        path: PATH.ERROR,
        element: <ErrorPage />,
      },
    ],
  },
];

export default routes;
