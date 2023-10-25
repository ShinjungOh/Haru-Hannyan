import { http } from '../http';

type RequestPutPassword = {
  password: string;
};

export const apiPutPassword = (password: string) =>
  http.put<RequestPutPassword>('/user/password', {
    password,
  });
