import Body from '@ui/components/layout/Body';
import styled from '@emotion/styled';
import styleTokenCss from '@ui/styles/styleToken.css';
import { ChangeEvent, useMemo, useState } from 'react';
import { useNavigate } from 'react-router';
import { PATH } from '@lib/const/path';
import { User, UserValidation } from '@lib/types/user';
import NavigationHeader from '@ui/components/layout/NavigationHeader';
import getValidationUser from '@lib/utils/getValidationUser';

export default function SigninPage() {
  const [user, setUser] = useState<Pick<User, 'email' | 'password'>>({
    email: '',
    password: '',
  });
  const [userValidation, setUserValidation] = useState<Pick<UserValidation, 'email' | 'password'>>({
    email: false,
    password: false,
  });
  const navigate = useNavigate();

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

  const handlePageSignup = () => {
    navigate(PATH.SIGN_UP);
  };

  const handleClickSignin = () => {
    if (!isDisabledSubmit) {
      alert('로그인에 성공했습니다.');
      navigate(PATH.CALENDAR);
    } else {
      alert('이메일, 비밀번호를 확인해 주세요.');
    }
  };

  return (
    <>
      <NavigationHeader />
      <Container>
        <Title>로그인</Title>
        <InputContainer>
          <label htmlFor="email">이메일</label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="이메일을 입력해 주세요."
            onChange={handleChangeUser}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="password">비밀번호</label>
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="비밀번호를 입력해 주세요."
            onChange={handleChangeUser}
          />
        </InputContainer>
        <Button type="button" onClick={handleClickSignin} disabled={isDisabledSubmit}>
          로그인
        </Button>
        <Description>
          회원이 아니신가요? {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" onClick={handlePageSignup}>
            {' '}
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
    padding: 3px;
    margin-bottom: 5px;
    color: ${styleTokenCss.color.gray3};
  }

  & + & {
    margin-bottom: 50px;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 22px;
  border-radius: 15px;
  border: 1px solid ${styleTokenCss.color.gray4};
  color: ${styleTokenCss.color.gray2};
  font-size: 17px;
  outline: none;
  cursor: pointer;

  ::placeholder {
    color: ${styleTokenCss.color.gray4};
  }
`;

const Button = styled.button`
  width: 100%;
  height: 71px;
  min-height: 65px;
  border-radius: 15px;
  border: none;
  background-color: ${styleTokenCss.color.subActive};
  color: ${styleTokenCss.color.white};
  font-size: 17px;
  font-weight: 600;
  cursor: pointer;

  &:disabled {
    background-color: ${styleTokenCss.color.gray5};
    color: ${styleTokenCss.color.white};
    cursor: not-allowed;
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
