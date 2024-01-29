import { Emotion, Feeling, ReportAnswers } from '@lib/types';

export const dummyDiary = [
  {
    diaryId: 1,
    feel: Feeling.화남,
    emotions: [],
    text: '',
    createDate: {
      year: 2024,
      month: 1,
      date: 1,
    },
  },
  {
    diaryId: 2,
    feel: Feeling.나쁨,
    emotions: [],
    text: '다이어리 내용',
    createDate: {
      year: 2024,
      month: 1,
      date: 2,
    },
  },
  {
    diaryId: 3,
    feel: Feeling.보통,
    emotions: [Emotion.뿌듯한, Emotion.행복한, Emotion.기대되는, Emotion.편안한, Emotion.피곤한],
    text: '',
    createDate: {
      year: 2024,
      month: 1,
      date: 3,
    },
  },
  {
    diaryId: 4,
    feel: Feeling.좋음,
    emotions: [Emotion.뿌듯한, Emotion.행복한],
    text: '다이어리 내용',
    createDate: {
      year: 2024,
      month: 1,
      date: 4,
    },
  },
  {
    diaryId: 5,
    feel: Feeling.행복,
    emotions: [
      Emotion.뿌듯한,
      Emotion.행복한,
      Emotion.기대되는,
      Emotion.편안한,
      Emotion.피곤한,
      Emotion.슬픈,
      Emotion.부담되는,
    ],
    text: '다이어리 내용',
    createDate: {
      year: 2024,
      month: 1,
      date: 5,
    },
  },
];

export const dummyAnswer: ReportAnswers[] = [
  {
    answer_id: 1,
    type: 'stress',
    answer: [
      { seq: 1, score: 1 },
      { seq: 2, score: 1 },
      { seq: 3, score: 1 },
      { seq: 4, score: 1 },
      { seq: 5, score: 1 },
      { seq: 6, score: 1 },
      { seq: 7, score: 1 },
      { seq: 8, score: 1 },
      { seq: 9, score: 1 },
      { seq: 10, score: 1 },
    ],
    sumScore: 10,
    create_date: '2024-01-01T20:24:54.000Z',
  },
  {
    answer_id: 2,
    type: 'stress',
    answer: [
      { seq: 1, score: 1 },
      { seq: 2, score: 1 },
      { seq: 3, score: 1 },
      { seq: 4, score: 1 },
      { seq: 5, score: 1 },
      { seq: 6, score: 1 },
      { seq: 7, score: 1 },
      { seq: 8, score: 1 },
      { seq: 9, score: 3 },
      { seq: 10, score: 4 },
    ],
    sumScore: 15,
    create_date: '2024-01-01T20:24:54.000Z',
  },
  {
    answer_id: 3,
    type: 'stress',
    answer: [
      { seq: 1, score: 2 },
      { seq: 2, score: 2 },
      { seq: 3, score: 2 },
      { seq: 4, score: 2 },
      { seq: 5, score: 2 },
      { seq: 6, score: 2 },
      { seq: 7, score: 2 },
      { seq: 8, score: 2 },
      { seq: 9, score: 2 },
      { seq: 10, score: 4 },
    ],
    sumScore: 22,
    create_date: '2024-10-10T20:24:54.000Z',
  },
  {
    answer_id: 4,
    type: 'stress',
    answer: [
      { seq: 1, score: 4 },
      { seq: 2, score: 4 },
      { seq: 3, score: 4 },
      { seq: 4, score: 4 },
      { seq: 5, score: 4 },
      { seq: 6, score: 4 },
      { seq: 7, score: 4 },
      { seq: 8, score: 4 },
      { seq: 9, score: 4 },
      { seq: 10, score: 4 },
    ],
    sumScore: 40,
    create_date: '2024-10-10T20:24:54.000Z',
  },
];

export const dummyCurrentDate = new Date('2024-01-22');

export const dummyPastDate = new Date('2023-12-22');
