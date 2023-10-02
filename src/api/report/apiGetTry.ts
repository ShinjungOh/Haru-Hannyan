import { http } from '../http';

type ResponseGetTry = {
  isTry: boolean;
};

export const apiGetTry = () => http.get<ResponseGetTry>('/answer/try');
