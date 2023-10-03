import { UserType } from '@lib/types';
import { http } from '../http';

type ResponsePostSignup = {
  token: string;
  user: {
    type: number;
    name: string;
  };
};

export const apiPostSignup = (user: UserType) => {
  const data = {
    email: user.email,
    password: user.password,
    name: user.name,
  };

  return http.post<ResponsePostSignup>('/user/signup', data);
};
