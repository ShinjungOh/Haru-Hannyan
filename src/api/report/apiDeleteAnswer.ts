import { http } from '../http';

type ResponseDeleteAnswer = {
  success: boolean;
};

export const apiDeleteAnswer = (answer_id: number) => http.delete<ResponseDeleteAnswer>(`/answer/${answer_id}`);
