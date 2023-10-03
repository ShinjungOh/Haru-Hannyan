import { Diary } from '@lib/types';
import { http } from '../http';

export const apiPutDiary = (id: string | null, diary: Diary) => http.put<unknown, Diary>(`/diary/${id}`, diary);
