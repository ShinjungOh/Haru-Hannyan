Feature('Timeline');

Scenario('render timeline and delete diary', ({ I }) => {
  I.amOnPage('/signin');
  I.fillField('email', 'aaa@dddd');
  I.fillField('password', '11111111');
  I.click('로그인');

  I.amOnPage('/timeline');

  I.click('#todayCat');
  I.see('오늘은 어떤 고양이인가요?');
  I.click('#행복');
  I.click({ name: 'submit_diary' });
  I.click('확인');

  I.wait(1);

  I.click({ name: 'delete_diary' });
  I.see('일기를 삭제하시겠어요?');
  I.click('취소');

  I.wait(1);

  I.click({ name: 'delete_diary' });
  I.see('일기를 삭제하시겠어요?');
  I.click('확인');

  I.wait(1);

  I.click({ name: 'left' });
  I.click({ name: 'left' });
  I.click({ name: 'right' });

  I.wait(1);
});
