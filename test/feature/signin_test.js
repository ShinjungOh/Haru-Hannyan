Feature('Login Process');

Scenario('render HomePage', ({ I }) => {
  I.amOnPage('/');

  I.see('하루한냥');
  I.see('이메일로 로그인');
  I.see('카카오로 로그인');
});

Scenario('signin', ({ I }) => {
  I.amOnPage('/');
  I.click('이메일로 로그인');
  I.see('회원이 아니신가요?');

  I.fillField('email', 'aaa@dddd');
  I.fillField('password', '11111111');
  I.click('로그인');
});

Scenario('signin failed', ({ I }) => {
  I.amOnPage('/signin');

  I.fillField('email', 'aaa@dddd');
  I.fillField('password', '987654321');
  I.click('로그인');
  I.see('아이디 또는 비밀번호가 일치하지 않습니다.');
});
