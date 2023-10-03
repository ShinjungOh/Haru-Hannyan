import { Diary } from '@lib/types';
import { http } from '../http';

type ResponseGetDailyDiary = {
  diary: Diary;
};

export const apiGetDailyDiary = (id: string | null) => http.get<ResponseGetDailyDiary>(`/diary/${id}`);
