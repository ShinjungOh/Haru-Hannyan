import { useSearchParams } from 'react-router-dom';
import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { PATH } from '@lib/const/path';
import { useAxiosErrorAlert } from '@lib/hooks';
import { ACCESS_TOKEN_KEY, USER_NAME_KEY, USER_TYPE_KEY } from '@lib/const/localstorage';
import { apiPostOAuthKakao } from '../api/user';

export function AuthKakaoPage() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const axiosErrorAlert = useAxiosErrorAlert();

  const code = params.get('code');

  const handleSigninKakao = useCallback(async () => {
    try {
      const responseSignIn = await apiPostOAuthKakao(code);

      if (responseSignIn.success && responseSignIn.data) {
        console.log(responseSignIn);
        const accessToken = responseSignIn.data.token;
        const userProfile = {
          name: responseSignIn.data.user.name,
          type: responseSignIn.data.user.type,
        };
        localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
        localStorage.setItem(USER_NAME_KEY, userProfile.name);
        localStorage.setItem(USER_TYPE_KEY, JSON.stringify(userProfile.type));
        navigate(PATH.CALENDAR);
      }
    } catch (e) {
      await axiosErrorAlert(e);
    }
  }, [code, navigate]);

  useEffect(() => {
    if (code) {
      handleSigninKakao();
    }
  }, [code, handleSigninKakao]);

  return <div />;
}
