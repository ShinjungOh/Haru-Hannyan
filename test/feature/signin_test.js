Feature('Signin Process');

Scenario('render HomePage and signin', async ({ I }) => {
  await I.signIn();
});

Scenario('signin failed', ({ I }) => {
  I.amOnPage('/signin');

  I.fillField('email', 'aaa@dddd');
  I.fillField('password', '987654321');
  I.click('로그인');

  I.wait(1);

  I.see('아이디 또는 비밀번호가 일치하지 않습니다.');
});

Scenario('logout', async ({ I }) => {
  await I.signIn();

  I.amOnPage('/setting');
  I.click('로그아웃');

  I.wait(1);

  I.see('로그아웃 하시겠어요?');
  I.click('확인');

  I.wait(1);

  I.see('하루한냥');
});
