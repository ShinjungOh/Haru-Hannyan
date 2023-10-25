import { http } from '../http';

type ResponseGetRecord = {
  diaryCount: number;
  answerCount: number;
};

export const apiGetRecord = () => http.get<ResponseGetRecord>('/setting/write');
