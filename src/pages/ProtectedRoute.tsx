import { useNavigate } from 'react-router';
import { PATH } from '@lib/const/path';
import { ACCESS_TOKEN } from '@lib/const/localstorage';

export default function ProtectedRoute({ children }: any) {
  const navigate = useNavigate();

  const isAccessToken = localStorage.getItem(ACCESS_TOKEN);
  if (!isAccessToken) {
    navigate(PATH.SIGN_IN);
  }

  return children;
}
