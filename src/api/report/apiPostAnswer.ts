import { http } from '../http';

type RequestPostAnswer = {
  type: 'stress';
  scores: number[];
};

export const apiPostAnswer = (type: 'stress', scores: number[]) => {
  const data = {
    type,
    scores,
  };

  return http.post<unknown, RequestPostAnswer>('/answer', data);
};
