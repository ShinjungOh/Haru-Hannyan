import { resultDetail } from '@lib/const/reportQnA';

export const mappedResultType = (num: number) => {
  if (num > 22) {
    const { color, description, title } = resultDetail.위험;
    return { color, description, title };
  }

  if (num > 16 && num <= 22) {
    const { color, description, title } = resultDetail.중증;
    return { color, description, title };
  }

  if (num > 13 && num <= 16) {
    const { color, description, title } = resultDetail.경도;
    return { color, description, title };
  }

  const { color, description, title } = resultDetail.정상;
  return { color, description, title };
};
