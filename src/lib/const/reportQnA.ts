import { styleToken } from '@ui/styles';

export const ANSWER_TITLE = [
  {
    score: 0,
    text: '전혀 아님',
  },
  {
    score: 1,
    text: '거의 아님',
  },
  {
    score: 2,
    text: '보통',
  },
  {
    score: 3,
    text: '자주 있음',
  },
  {
    score: 4,
    text: '매일',
  },
];

export const RESULT_DETAIL = {
  위험: {
    score: '23 ~ 40점',
    title: '위험',
    color: `${styleToken.color.alert_danger}`,
    description:
      '극심한 스트레스 상태입니다. 스트레스를 풀만한 여유를 갖지 못해 스트레스가 계속 쌓이게 되면, 몸과 마음이 갑자기 무너지게 될지도 몰라요. 빠른 시일 내에 전문가의 도움을 받아보실 것을 권해드려요.',
  },
  중증: {
    score: '17 ~ 22점',
    title: '중증',
    color: `${styleToken.color.primary}`,
    description:
      '중증도의 스트레스 상태입니다. 우울증이나 불안증 등 스트레스에 의한 정신과적 후유 증상이 나타날 수도 있으니, 적절한 진단과 개선을 위해 전문가의 도움을 받아보실 것을 권해드려요.',
  },
  경도: {
    score: '14 ~ 16점',
    title: '경도',
    color: `${styleToken.color.alert_success}`,
    description:
      '경도의 스트레스 상태입니다. 현재의 스트레스 상황이 지속되면 번아웃, 우울증 등 정신과적 장애로 넘어갈 가능성이 있어요. 몸과 마음이 잠시 쉬어갈 수 있도록 시간을 가지는 것을 추천해요.',
  },
  정상: {
    score: '0 ~ 13점',
    title: '정상',
    color: `${styleToken.color.gray4}`,
    description:
      '정상적인 스트레스 상태입니다. 일상생활에 어려움이 없는 수준이에요. 지금처럼 자신을 돌보는 것에 집중해 주세요.',
  },
};
