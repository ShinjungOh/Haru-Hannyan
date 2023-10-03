import { NewDiary } from '@lib/types';
import { http } from '../http';

type RequestPostDiary = {
  diary: NewDiary;
};

export const apiPostDiary = (diary: NewDiary) => {
  const data = {
    diary,
  };

  return http.post<unknown, RequestPostDiary>('/diary', data);
};
