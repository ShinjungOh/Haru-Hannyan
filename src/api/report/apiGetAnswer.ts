import { ReportAnswers } from '@lib/types';
import { http } from '../http';

type ResponseGetAnswer = {
  answer: ReportAnswers;
};

export const apiGetAnswer = (answer_id: number) => http.get<ResponseGetAnswer>(`/answer/${answer_id}`);
