import { NewDiary } from '@lib/types';
import { http } from '../http';

export const apiPostDiary = (diary: NewDiary) => http.post<unknown, NewDiary>('/diary', diary);
