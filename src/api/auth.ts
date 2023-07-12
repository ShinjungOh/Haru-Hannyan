import { User } from '@lib/types/user';
import { requestPost } from './client';

export const postSignin = async (user: Pick<User, 'email' | 'password'>) => {
  const url = '/user/signin';
  const data = {
    email: user.email,
    password: user.password,
  };

  const result = await requestPost({ url, data });
  const ACCESS_TOKEN = result.data.data.user.user_token;
  return { result, ACCESS_TOKEN };
};

export const postSignup = async (user: Pick<User, 'email' | 'password' | 'name'>) => {
  const url = '/user/signup';
  const data = {
    email: user.email,
    password: user.password,
    name: user.name,
  };

  const result = await requestPost({ url, data });
  const ACCESS_TOKEN = result.data.data.user.user_token;
  return { result, ACCESS_TOKEN };
};
