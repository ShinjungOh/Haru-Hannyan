// eslint-disable-next-line @typescript-eslint/no-var-requires
const Helper = require('@codeceptjs/helper');

class CustomHelper extends Helper {
  async signIn() {
    const { Playwright } = this.helpers;

    await Playwright.amOnPage('/');

    await Playwright.see('하루한냥');
    await Playwright.see('이메일로 로그인');
    await Playwright.see('카카오로 로그인');

    await Playwright.click('이메일로 로그인');
    await Playwright.see('회원이 아니신가요?');

    await Playwright.fillField('email', 'aaa@dddd');
    await Playwright.fillField('password','11111111');
    await Playwright.click('로그인');
  }

  async testing() {
    const { Playwright } = this.helpers;

    await Playwright.amOnPage('/report');

    await Playwright.see('스트레스 측정하기');
    await Playwright.see('새로 검사하기');
    await Playwright.see('이전 검사결과 보기');

    await Playwright.click({ name: 'new_test' });

    await Playwright.waitForElement('.question-container section label', 5000);

    const questionIndexes = Array.from({ length: 10 }, (_, index) => index + 2);

    // eslint-disable-next-line no-restricted-syntax
    for (const questionIndex of questionIndexes) {
      await Playwright.click(`.question-container:nth-of-type(${questionIndex}) section label:nth-child(2)`);
      await Playwright.wait(0.3);
    }

    await Playwright.wait(1);

    await Playwright.click('결과보기');
  }
}

module.exports = CustomHelper;
