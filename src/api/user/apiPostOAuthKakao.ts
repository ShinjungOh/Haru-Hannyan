import { http } from '../http';

type ResponseOAuthKakao = {
  isFirstLogin: boolean;
  token: string;
  user: {
    type: number;
    name: string;
  };
};

export const apiPostOAuthKakao = (code: string | null) => http.post<ResponseOAuthKakao>('/user/oauth/kakao', { code });
