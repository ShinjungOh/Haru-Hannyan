import { http } from '../http';

type ResponseDeleteAnswer = {
  success: boolean;
};

export const apiDeleteAnswer = (answerId: number) => http.delete<ResponseDeleteAnswer>(`/answer/${answerId}`);
