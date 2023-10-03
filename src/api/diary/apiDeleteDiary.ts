import { http } from '../http';

type ResponseDeleteDiary = {
  success: boolean;
};

export const apiDeleteDiary = (diaryId: number | undefined) => http.delete<ResponseDeleteDiary>(`/diary/${diaryId}`);
