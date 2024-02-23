/* eslint-disable */
/// <reference types='codeceptjs' />

declare namespace CodeceptJS {
  interface SupportObject {
    I: I;
    current: any;
  }
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
  interface CustomLocators {
    data: { data: string; value?: number; flag?: boolean };
  }
}
