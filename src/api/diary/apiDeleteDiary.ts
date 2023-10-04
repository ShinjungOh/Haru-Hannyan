import { http } from '../http';

type ResponseDeleteDiary = {
  success: boolean;
};

export const apiDeleteDiary = (id: string) => http.delete<ResponseDeleteDiary>(`/diary/${id}`);
