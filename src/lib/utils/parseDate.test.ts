import { parseDate } from '@lib/utils/parseDate';

describe('parseDate', () => {
  it('parse string Date to object number Date', () => {
    const result = parseDate('2023-01-01T00:00:00');

    expect(result).toStrictEqual({
      year: 2023,
      month: 0,
      date: 1,
    });
  });

  it('parse string Date to object string Date', () => {
    const result = parseDate('2023-01-01T00:00:00');

    expect(result).not.toStrictEqual({
      year: '2023',
      month: '0',
      date: '1',
    });
  });
});
