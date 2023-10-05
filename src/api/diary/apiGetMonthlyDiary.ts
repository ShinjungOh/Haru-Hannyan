import { Diary } from '@lib/types';
import { http } from '../http';

type ResponseGetMonthlyDiary = {
  diary: Diary[];
};

export const apiGetMonthlyDiary = (year: number, month: number) =>
  http.get<ResponseGetMonthlyDiary>(`/diary?year=${year}&month=${month}`);
