import { User } from '@lib/types/user';
import { requestPost } from './client';

const postSignin = async (user: User) => {
  const url = '/signin';
  const data = {
    email: user.email,
    password: user.password,
  };

  await requestPost({ url, data });
};

const postSignup = async (user: User) => {
  const url = '/signup';
  const data = {
    email: user.email,
    password: user.password,
    passwordCheck: user.passwordCheck,
    name: user.name,
  };

  await requestPost({ url, data });
};

export default { postSignin, postSignup };
