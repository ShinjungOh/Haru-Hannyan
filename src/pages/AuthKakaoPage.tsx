import { useSearchParams } from 'react-router-dom';
import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { PATH } from '@lib/const/path';
import { ACCESS_TOKEN, USER } from '@lib/const/localstorage';
import { handleAxiosError, http } from '../api/http';

export default function AuthKakaoPage() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const code = params.get('code');

  const handleSigninKakao = useCallback(async () => {
    try {
      const responseSignIn = await http.post<{ token: string; user: { name: string } }>('/user/oauth/kakao', { code });
      const isSuccess = responseSignIn.success;
      if (isSuccess && responseSignIn.data) {
        const accessToken = responseSignIn.data.token;
        const userProfile = {
          name: responseSignIn.data.user.name,
        };
        localStorage.setItem(ACCESS_TOKEN, JSON.stringify(accessToken));
        localStorage.setItem(USER, JSON.stringify(userProfile));
        navigate(PATH.CALENDAR);
      }
    } catch (e) {
      const error = handleAxiosError(e);
      alert(error.msg);
      navigate(PATH.HOME);
    }
  }, [code, navigate]);

  useEffect(() => {
    if (code) {
      handleSigninKakao();
    }
  }, [code, handleSigninKakao]);

  return <div />;
}
