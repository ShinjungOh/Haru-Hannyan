import { PATH } from '@lib/const/path';
import { Emotion, Feeling } from '@lib/types';

export const FEELING_CAT_ICON = '/images/icon/menu/feel-cat.svg';

export const MENU_ICON = {
  [PATH.CALENDAR]: { active: '/images/icon/menu/calendar-active.svg', inactive: '/images/icon/menu/calendar.svg' },
  [PATH.TIMELINE]: { active: '/images/icon/menu/timeline-active.svg', inactive: '/images/icon/menu/timeline.svg' },
  [PATH.REPORT]: { active: '/images/icon/menu/report-active.svg', inactive: '/images/icon/menu/report.svg' },
  [PATH.SETTING]: { active: '/images/icon/menu/setting-active.svg', inactive: '/images/icon/menu/setting.svg' },
};

export const CALENDAR_TYPE_IMG = {
  today: 'images/icon/calendar/today.svg',
  available: 'images/icon/calendar/available.svg',
  disabled: 'images/icon/calendar/disabled.svg',
  [Feeling.행복]: 'images/icon/calendar/feeling-cat-great.svg',
  [Feeling.좋음]: 'images/icon/calendar/feeling-cat-good.svg',
  [Feeling.보통]: 'images/icon/calendar/feeling-cat-normal.svg',
  [Feeling.나쁨]: 'images/icon/calendar/feeling-cat-bad.svg',
  [Feeling.화남]: 'images/icon/calendar/feeling-cat-angry.svg',
};

export const FEELING_CAT_TYPE = [
  {
    feeling: Feeling.행복,
    url: '/images/icon/calendar/feeling-cat-great.svg',
  },
  {
    feeling: Feeling.좋음,
    url: '/images/icon/calendar/feeling-cat-good.svg',
  },
  {
    feeling: Feeling.보통,
    url: '/images/icon/calendar/feeling-cat-normal.svg',
  },
  {
    feeling: Feeling.나쁨,
    url: '/images/icon/calendar/feeling-cat-bad.svg',
  },
  {
    feeling: Feeling.화남,
    url: '/images/icon/calendar/feeling-cat-angry.svg',
  },
];

export const EMOTION_TYPE = [
  {
    emotion: Emotion.신나는,
    url: '/images/icon/emotion/신나는.svg',
  },
  {
    emotion: Emotion.편안한,
    url: '/images/icon/emotion/편안한.svg',
  },
  {
    emotion: Emotion.뿌듯한,
    url: '/images/icon/emotion/뿌듯한.svg',
  },
  {
    emotion: Emotion.기대되는,
    url: '/images/icon/emotion/기대되는.svg',
  },
  {
    emotion: Emotion.행복한,
    url: '/images/icon/emotion/행복한.svg',
  },
  {
    emotion: Emotion.의욕적인,
    url: '/images/icon/emotion/의욕적인.svg',
  },
  {
    emotion: Emotion.설레는,
    url: '/images/icon/emotion/설레는.svg',
  },
  {
    emotion: Emotion.상쾌한,
    url: '/images/icon/emotion/상쾌한.svg',
  },
  {
    emotion: Emotion.우울한,
    url: '/images/icon/emotion/우울한.svg',
  },
  {
    emotion: Emotion.외로운,
    url: '/images/icon/emotion/외로운.svg',
  },
  {
    emotion: Emotion.불안한,
    url: '/images/icon/emotion/불안한.svg',
  },
  {
    emotion: Emotion.슬픈,
    url: '/images/icon/emotion/슬픈.svg',
  },
  {
    emotion: Emotion.화난,
    url: '/images/icon/emotion/화난.svg',
  },
  {
    emotion: Emotion.부담되는,
    url: '/images/icon/emotion/부담되는.svg',
  },
  {
    emotion: Emotion.짜증나는,
    url: '/images/icon/emotion/짜증나는.svg',
  },
  {
    emotion: Emotion.피곤한,
    url: '/images/icon/emotion/피곤한.svg',
  },
];
