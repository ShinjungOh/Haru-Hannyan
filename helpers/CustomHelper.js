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
}

module.exports = CustomHelper;
