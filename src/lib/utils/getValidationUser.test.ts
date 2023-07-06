import getValidationUser from '@lib/utils/getValidationUser';

const context = describe;

describe('getValidationUser', () => {
  context('when user enter email', () => {
    it('return email validation pass', () => {
      const resultTrue = getValidationUser('email', 'aaa@bbbb');

      expect(resultTrue).toBe(true);
    });

    it('return email validation failed', () => {
      const resultFalse = getValidationUser('email', 'aaabbbb');

      expect(resultFalse).toBe(false);
    });
  });

  context('when user enter password', () => {
    it('return password validation pass', () => {
      const result = getValidationUser('password', 'qwerty1234');
      expect(result).toBe(true);
    });

    it('return password validation failed', () => {
      const result = getValidationUser('password', '1234');
      expect(result).toBe(false);
    });
  });

  context('when user enter name', () => {
    it('return name validation pass', () => {
      const result = getValidationUser('name', 'celie');
      expect(result).toBe(true);
    });

    it('return name validation failed', () => {
      const result = getValidationUser('name', 'c');
      expect(result).toBe(false);
    });
  });
});
