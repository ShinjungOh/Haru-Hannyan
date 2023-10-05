import { RESULT_DETAIL } from '@lib/const/reportQnA';

export const mappedResultType = (num: number) => {
  if (num > 22) {
    const { color, description, title } = RESULT_DETAIL.위험;
    return { color, description, title };
  }

  if (num > 16 && num <= 22) {
    const { color, description, title } = RESULT_DETAIL.중증;
    return { color, description, title };
  }

  if (num > 13 && num <= 16) {
    const { color, description, title } = RESULT_DETAIL.경도;
    return { color, description, title };
  }

  const { color, description, title } = RESULT_DETAIL.정상;
  return { color, description, title };
};
