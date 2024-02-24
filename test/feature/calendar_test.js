Feature('Calendar');

Scenario('render calendar and write diary', ({ I }) => {
  I.amOnPage('/');
  I.click('이메일로 로그인');
  I.see('회원이 아니신가요?');

  I.fillField('email', 'aaa@dddd');
  I.fillField('password', '11111111');
  I.click('로그인');

  I.amOnPage('/calendar');
  I.see('월');
  I.see('수');
  I.see('금');

  I.click({ name: 'left' });
  I.click({ name: 'left' });
  I.click({ name: 'right' });

  I.click('#todayCat');
  I.see('오늘은 어떤 고양이인가요?');
  I.click('#행복');

  I.click('#편안한');
  I.click('#설레는');
  I.click('#행복한');
  I.click('#설레는');
  I.click('#슬픈');

  I.wait(5);
});
