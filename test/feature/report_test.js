Feature('Report');

Scenario('render ReportPage, start test and delete record', async ({ I }) => {
  await I.signIn();
  await I.testing();

  I.wait(1);

  I.click('검사 기록 삭제하기');
  I.see('기록을 삭제할까요?');
  I.click('확인');

  I.see('답변이 삭제 되었습니다.');
  I.click('확인');
});

Scenario('test overlap error and delete record', async ({ I }) => {
  await I.signIn();
  await I.testing();

  I.amOnPage('/report');
  I.click({ name: 'new_test' });

  I.see('일주일 내의 검사 결과가 이미 존재합니다.');
  I.click('확인');

  I.amOnPage('/report/answer');
  I.click('.report-item > div:nth-child(1)');

  I.click('검사 기록 삭제하기');
  I.see('기록을 삭제할까요?');
  I.click('확인');

  I.see('답변이 삭제 되었습니다.');
  I.click('확인');
});
