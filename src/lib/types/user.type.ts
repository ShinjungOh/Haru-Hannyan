export type UserType = {
  email: string;
  password: string;
  passwordCheck: string;
  name: string;
};

export type UserValidation = {
  email: boolean;
  password: boolean;
  passwordCheck: boolean;
  name: boolean;
};
