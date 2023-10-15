import { useNavigate } from 'react-router';
import { PATH } from '@lib/const/path';
import { ACCESS_TOKEN_KEY } from '@lib/const/localstorage';

export function ProtectedRoute({ children }: any) {
  const navigate = useNavigate();

  const isAccessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
  if (!isAccessToken) {
    navigate(PATH.SIGN_IN);
  }

  return children;
}
