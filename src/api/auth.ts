import { User } from '@lib/types/user';
import { requestPost } from './client';

export const postSignin = async (user: Pick<User, 'email' | 'password'>) => {
  const url = '/user/signin';
  const data = {
    email: user.email,
    password: user.password,
  };

  await requestPost({ url, data });
};

export const postSignup = async (user: User) => {
  const url = '/user/signup';
  const data = {
    email: user.email,
    password: user.password,
    name: user.name,
  };

  await requestPost({ url, data });
};
