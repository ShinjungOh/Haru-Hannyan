import { ReportAnswers } from '@lib/types';
import { http } from '../http';

type ResponseGetAnswers = {
  answers: ReportAnswers[];
};

export const apiGetAnswers = () => http.get<ResponseGetAnswers>('/answer');
