import { http } from '../http';

type RequestPutPassword = {
  password: string;
};

export const apiPutPassword = (password: string) => http.patch<RequestPutPassword>('/user', password);
