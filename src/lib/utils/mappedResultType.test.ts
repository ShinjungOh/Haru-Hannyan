import { mappedResultType } from '@lib/utils/mappedResultType';
import { styleToken } from '@ui/styles';

describe('mappedResultType', () => {
  it('when answer result is "위험"', () => {
    const result = mappedResultType(40);

    expect(result).toStrictEqual({
      title: '위험',
      color: `${styleToken.color.alert_danger}`,
      description:
        '극심한 스트레스 상태입니다. 스트레스를 풀만한 여유를 갖지 못해 스트레스가 계속 쌓이게 되면, 몸과 마음이 갑자기 무너지게 될지도 몰라요. 빠른 시일 내에 전문가의 도움을 받아보실 것을 권해드려요.',
    });
  });

  it('when answer result is "중증" ', () => {
    const result = mappedResultType(20);

    expect(result).toStrictEqual({
      title: '중증',
      color: `${styleToken.color.primary}`,
      description:
        '중증도의 스트레스 상태입니다. 우울증이나 불안증 등 스트레스에 의한 정신과적 후유 증상이 나타날 수도 있으니, 적절한 진단과 개선을 위해 전문가의 도움을 받아보실 것을 권해드려요.',
    });
  });

  it('when answer result is "경도" ', () => {
    const result = mappedResultType(15);

    expect(result).toStrictEqual({
      title: '경도',
      color: `${styleToken.color.alert_success}`,
      description:
        '경도의 스트레스 상태입니다. 현재의 스트레스 상황이 지속되면 번아웃, 우울증 등 정신과적 장애로 넘어갈 가능성이 있어요. 몸과 마음이 잠시 쉬어갈 수 있도록 시간을 가지는 것을 추천해요.',
    });
  });

  it('when answer result is "정상" ', () => {
    const result = mappedResultType(5);

    expect(result).toStrictEqual({
      title: '정상',
      color: `${styleToken.color.gray4}`,
      description:
        '정상적인 스트레스 상태입니다. 일상생활에 어려움이 없는 수준이에요. 지금처럼 자신을 돌보는 것에 집중해 주세요.',
    });
  });
});
