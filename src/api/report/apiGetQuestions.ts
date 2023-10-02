import { http } from '../http';

type ResponseGetQuestions = {
  question: [];
};

export const apiGetQuestions = () => http.get<ResponseGetQuestions>('/question/stress');
