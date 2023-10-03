import { Diary } from '@lib/types';
import { http } from '../http';

type RequestPutDiary = {
  id: string | null;
  diary: Diary;
};

export const apiPutDiary = (id: string | null, diary: Diary) => {
  const data = {
    id,
    diary,
  };

  return http.put<unknown, RequestPutDiary>(`/diary/${id}`, data);
};
