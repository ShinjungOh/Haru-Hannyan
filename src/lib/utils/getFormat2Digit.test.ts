import { getFormat2Digit } from '@lib/utils/getFormat2Digit';

describe('getFormat2Digit', () => {
  it('한 자리 숫자일 때', () => {
    expect(getFormat2Digit(5)).toBe('05');
    expect(getFormat2Digit(9)).toBe('09');
  });

  it('두 자리 숫자일 때', () => {
    expect(getFormat2Digit(15)).toBe('15');
    expect(getFormat2Digit(29)).toBe('29');
  });
});
