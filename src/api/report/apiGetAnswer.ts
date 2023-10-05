import { ReportAnswers } from '@lib/types';
import { http } from '../http';

type ResponseGetAnswer = {
  answer: ReportAnswers;
};

export const apiGetAnswer = (answerId: number) => http.get<ResponseGetAnswer>(`/answer/${answerId}`);
