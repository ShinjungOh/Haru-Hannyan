const getValidationUser = (name: 'email' | 'password' | 'name', value: string) => {
  const regexp = {
    email: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
    password: /^.{8,}$/,
    name: /^.{2,}$/,
  };
  return regexp[name].test(value);
};

export default getValidationUser;
