import styled from '@emotion/styled';
import { styleToken } from '@ui/styles';
import { KeyboardEvent, MouseEvent, ChangeEvent, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router';
import { Body } from '@ui/components/layout';
import { TextField, NavigationHeader, SignButton, Typography } from '@ui/components/common';
import { useAxiosErrorAlert } from '@lib/hooks';
import { PATH } from '@lib/const/path';
import { UserType, UserValidation } from '@lib/types';
import { getValidationUser } from '@lib/utils';
import { ACCESS_TOKEN_KEY, EMAIL_KEY, USER_NAME_KEY, USER_TYPE_KEY } from '@lib/const/localstorage';
import { apiPostSignin } from '../api/user';

export function SigninPage() {
  const navigate = useNavigate();
  const axiosErrorAlert = useAxiosErrorAlert();

  const [user, setUser] = useState<Pick<UserType, 'email' | 'password'>>({
    email: '',
    password: '',
  });
  const [userValidation, setUserValidation] = useState<Pick<UserValidation, 'email' | 'password'>>({
    email: false,
    password: false,
  });

  const handleChangeUser = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const test = getValidationUser(name as 'email' | 'password', value);

    setUser({
      ...user,
      [name]: value,
    });

    setUserValidation({
      ...userValidation,
      [name]: test,
    });
  };

  const isDisabledSubmit = useMemo(
    () => !(userValidation.email && userValidation.password),
    [userValidation.email, userValidation.password],
  );

  const handleClickSignIn = async () => {
    if (isDisabledSubmit) {
      return;
    }

    try {
      const responseSignIn = await apiPostSignin(user);

      if (responseSignIn.success && responseSignIn.data) {
        const accessToken = responseSignIn.data.user.user_token;
        const userProfile = {
          name: responseSignIn.data.user.name,
          email: responseSignIn.data.user.email,
          type: responseSignIn.data.user.type,
        };
        localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
        localStorage.setItem(USER_NAME_KEY, userProfile.name);
        localStorage.setItem(EMAIL_KEY, userProfile.email);
        localStorage.setItem(USER_TYPE_KEY, JSON.stringify(userProfile.type));
        navigate(PATH.CALENDAR);
      }
    } catch (e) {
      await axiosErrorAlert(e);
    }
  };

  const handleOnKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleClickSignIn();
    }
  };

  const handleChangePageSignup = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate(PATH.SIGN_UP);
  };

  useEffect(() => {
    const isAccessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
    if (isAccessToken) {
      navigate(PATH.CALENDAR);
    }
  }, [navigate]);

  return (
    <>
      <NavigationHeader isBack />
      <Container>
        <TitleContainer>
          <Typography variant="h2">로그인</Typography>
        </TitleContainer>
        <InputContainer>
          <label htmlFor="email">이메일</label>
          <TextField
            type="email"
            id="email"
            name="email"
            value={user.email}
            placeholder="이메일을 입력해 주세요."
            autoFocus
            onChange={handleChangeUser}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="password">비밀번호</label>
          <TextField
            type="password"
            id="password"
            name="password"
            value={user.password}
            placeholder="비밀번호를 입력해 주세요."
            onChange={handleChangeUser}
            onKeyPress={handleOnKeyPress}
          />
        </InputContainer>
        <SignButton
          text="로그인"
          onClick={handleClickSignIn}
          disabled={isDisabledSubmit}
          backgroundColor={styleToken.color.secondaryActive}
          color={styleToken.color.white}
        />
        <Description>
          <Typography variant="subtitle4" color={styleToken.color.gray3} fontWeight={600}>
            회원이 아니신가요?{' '}
            <a href="#" onClick={handleChangePageSignup}>
              회원가입
            </a>
          </Typography>
        </Description>
      </Container>
    </>
  );
}

const Container = styled(Body)`
  padding: 10px 34px 34px 34px;
  justify-content: flex-start;
  align-items: center;
  overflow-y: auto;
`;

const TitleContainer = styled.div`
  margin-bottom: 44px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 34px;
  width: 100%;
  height: auto;
  min-height: 80px;

  label {
    width: 100%;
    height: 15px;
    padding-left: 3px;
    margin-bottom: 8px;
    color: ${styleToken.color.gray3};
    font-size: 14px;
  }

  & + & {
    margin-bottom: 42px;
  }
`;

const Description = styled.div`
  margin-top: 20px;
  margin-bottom: 60px;

  a {
    cursor: pointer;
    text-decoration: underline;
    color: ${styleToken.color.alert_success};
  }
`;
