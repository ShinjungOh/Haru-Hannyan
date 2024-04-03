Feature('Calendar');

Scenario('render calendar and write diary', async ({ I }) => {
  await I.signIn();

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

  I.click('#empty_diary');
  I.fillField('diaryText', 'Hello!');
  I.click({ name: 'submit' });

  I.wait(1);

  I.click({ name: 'submit_diary' });
});

Scenario('diary overlap error', async ({ I }) => {
  await I.signIn();

  I.amOnPage('/calendar');
  I.click('#todayCat');
  I.see('오늘은 어떤 고양이인가요?');
  I.click('#행복');

  I.see('오늘의 일기가 존재해요.');
  I.click('확인');
});

Scenario('diary delete', async ({ I }) => {
  await I.signIn();

  I.amOnPage('/timeline');
  I.click({ name: 'delete_diary' });
  I.see('일기를 삭제하시겠어요?');
  I.click('확인');
});
