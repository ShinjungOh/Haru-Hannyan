Feature('Report');

Scenario('render HomePage and signin', async ({ I }) => {
  await I.signIn();
});
