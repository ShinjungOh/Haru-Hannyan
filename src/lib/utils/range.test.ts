import { range } from '@lib/utils';

describe('range', () => {
  it('should be [1, 2, 3, 4, 5]', () => {
    const result = range(5, 1);
    expect(result).toStrictEqual([1, 2, 3, 4, 5]);
  });

  it('should be []', () => {
    const result = range(0, 0);
    expect(result).toStrictEqual([]);
  });
});
