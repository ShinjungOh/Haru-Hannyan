/// <reference types='codeceptjs' />

export const config: CodeceptJS.MainConfig = {
  tests: "./test/**/*_test.ts",
  output: "./output",
  helpers: {
    Playwright: {
      browser: "chromium",
      url: "http://localhost:5173",
      show: true,
    },
  },
  include: {
    I: "./test/steps_file.ts",
  },
  name: "Haru-Hannyan",
  require: ["ts-node/register"]
};
