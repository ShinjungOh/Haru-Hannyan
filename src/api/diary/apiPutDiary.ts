import { Diary } from '@lib/types';
import { http } from '../http';

export const apiPutDiary = (id: string, diary: Diary) => http.put<unknown, Diary>(`/diary/${id}`, diary);
