import styled from '@emotion/styled';
import styleTokenCss from '@ui/styles/styleToken.css';
import React, { ChangeEvent, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router';
import { PATH } from '@lib/const/path';
import { UserType, UserValidation } from '@lib/types/user.type';
import getValidationUser from '@lib/utils/getValidationUser';
import { ACCESS_TOKEN, USER } from '@lib/const/localstorage';
import { Body } from '@ui/components/layout';
import { InputBox, NavigationHeader, SignButton } from '@ui/components/common';
import { useAlert } from '@lib/hooks';
import { handleAxiosError, http } from '../api/http';

export function SigninPage() {
  const navigate = useNavigate();
  const alert = useAlert();

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
      const responseSignIn = await http.post<{ user: { user_token: string; name: string } }>('/user/signin', {
        email: user.email,
        password: user.password,
      });
      if (responseSignIn.data) {
        const accessToken = responseSignIn.data.user.user_token;
        const userProfile = {
          name: responseSignIn.data.user.name,
        };
        localStorage.setItem(ACCESS_TOKEN, accessToken);
        localStorage.setItem(USER, JSON.stringify(userProfile));
        navigate(PATH.CALENDAR);
      }
    } catch (e) {
      const error = handleAxiosError(e);
      alert({
        type: 'danger',
        title: error.msg,
      });
    }
  };

  const handlePageSignup = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate(PATH.SIGN_UP);
  };

  useEffect(() => {
    const isAccessToken = localStorage.getItem('ACCESS_TOKEN');
    if (isAccessToken) {
      navigate(PATH.CALENDAR);
    }
  }, [navigate]);

  return (
    <>
      <NavigationHeader />
      <Container>
        <Title>로그인</Title>
        <InputContainer>
          <label htmlFor="email">이메일</label>
          <InputBox
            type="email"
            id="email"
            name="email"
            placeholder="이메일을 입력해 주세요."
            autoFocus
            onChange={handleChangeUser}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="password">비밀번호</label>
          <InputBox
            type="password"
            id="password"
            name="password"
            placeholder="비밀번호를 입력해 주세요."
            onChange={handleChangeUser}
          />
        </InputContainer>
        <SignButton
          text="로그인"
          onClick={handleClickSignIn}
          disabled={isDisabledSubmit}
          backgroundColor={styleTokenCss.color.secondaryActive}
          color={styleTokenCss.color.white}
        />
        <Description>
          회원이 아니신가요?{' '}
          <a href="#" onClick={handlePageSignup}>
            회원가입
          </a>
        </Description>
      </Container>
    </>
  );
}

const Container = styled(Body)`
  padding: 35px;
  justify-content: flex-start;
  align-items: center;
  overflow-y: auto;
`;

const Title = styled.h2`
  margin-top: 20px;
  margin-bottom: 50px;
  color: ${styleTokenCss.color.gray2};
  font-size: 32px;
  font-weight: 600;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 39px;
  width: 100%;
  height: 100px;
  min-height: 85px;

  label {
    width: 100%;
    height: 15px;
    padding-left: 3px;
    margin-bottom: 8px;
    color: ${styleTokenCss.color.gray3};
    font-size: 15px;
  }

  & + & {
    margin-bottom: 50px;
  }
`;

const Description = styled.h5`
  margin-top: 40px;
  margin-bottom: 40px;
  color: ${styleTokenCss.color.gray3};
  font-size: 14px;
  font-weight: 600;

  a {
    cursor: pointer;
    text-decoration: underline;
    color: ${styleTokenCss.color.alert1};
  }
`;
