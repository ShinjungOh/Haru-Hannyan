import { http } from '../http';

type ResponseOAuthKakao = {
  success: boolean;
  msg: string;
};

export const apiPostOAuthKakao = (code: string | null) => http.post<ResponseOAuthKakao>('/user/oauth/kakao', { code });
