/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './test/**/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'http://localhost:5173',
      show: true
    }
  },
  include: {
    I: './steps_file.js',
  },
  name: 'Haru-Hannyan'
};
