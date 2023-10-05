import { UserType } from '@lib/types';
import { http } from '../http';

type ResponsePostSignin = {
  user: {
    user_token: string;
    name: string;
  };
};

type RequestPostSignin = {
  email: string;
  password: string;
};

export const apiPostSignin = (user: Pick<UserType, 'email' | 'password'>) => {
  const data = {
    email: user.email,
    password: user.password,
  };

  return http.post<ResponsePostSignin, RequestPostSignin>('/user/signin', data);
};
