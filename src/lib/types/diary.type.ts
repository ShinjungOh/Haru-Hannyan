export enum Feeling {
  행복 = '행복',
  좋음 = '좋음',
  보통 = '보통',
  나쁨 = '나쁨',
  화남 = '화남',
}

export enum Emotion {
  신나는 = '신나는',
  편안한 = '편안한',
  뿌듯한 = '뿌듯한',
  기대되는 = '기대되는',
  행복한 = '행복한',
  의욕적인 = '의욕적인',
  설레는 = '설레는',
  상쾌한 = '상쾌한',
  우울한 = '우울한',
  외로운 = '외로운',
  불안한 = '불안한',
  슬픈 = '슬픈',
  화난 = '화난',
  부담되는 = '부담되는',
  짜증나는 = '짜증나는',
  피곤한 = '피곤한',
}

export type Diary = {
  diaryId?: number;
  feel: Feeling;
  emotions: Emotion[];
  text: string;
  createDate: {
    year: number;
    month: number;
    date: number;
  };
};

export type NewDiary = {
  feel: string | null;
  emotions: Emotion[];
  text: string;
  date: {
    year: number;
    month: number;
    date: number;
  };
};

export type DateType = 'today' | 'available' | 'disabled' | Feeling;
