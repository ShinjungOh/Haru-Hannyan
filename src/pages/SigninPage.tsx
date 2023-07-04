import Body from '@ui/components/layout/Body';
import styled from '@emotion/styled';
import styleTokenCss from '@ui/styles/styleToken.css';
import { useNavigate } from 'react-router';
import { PATH } from '@lib/const/path';
import { ChangeEvent, useMemo, useState } from 'react';

type User = {
  email: string;
  password: string;
};

type UserValidation = {
  email: boolean;
  password: boolean;
};

export default function SigninPage() {
  const [user, setUSer] = useState<User>({
    email: '',
    password: '',
  });
  const [userValidation, setUserValidation] = useState<UserValidation>({
    email: false,
    password: false,
  });
  const navigate = useNavigate();

  const handlePageSignup = () => {
    navigate(PATH.SIGN_UP);
  };

  const handlePageBack = () => {
    navigate(-1);
  };

  const handleChangeUser = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const getValidateUser = (name: 'email' | 'password', value: string) => {
      const regexp = {
        email: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
        password: /^.{8,}$/,
      };

      return regexp[name].test(value);
    };

    setUSer({
      ...user,
      [name]: value,
    });

    setUserValidation({
      ...userValidation,
      [name]: getValidateUser(name as 'email' | 'password', value),
    });
  };

  const isValidate = useMemo(() => !(userValidation.email && userValidation.password), [userValidation.email, userValidation.password]);

  const handleClickSignin = () => {
    if (!isValidate) {
      alert('로그인에 성공했습니다.');
      navigate(PATH.CALENDAR);
    } else {
      alert('이메일, 비밀번호를 확인해 주세요.');
    }
  };

  return (
    <Body>
      <Container>
        <img onClick={handlePageBack} src="/images/icon/back.png" alt="back" />
        <Title>로그인</Title>
        <InputContainer>
          <label htmlFor="email">이메일</label>
          <Input type="email" id="email" name="email" placeholder="이메일을 입력해 주세요." onChange={handleChangeUser} />
        </InputContainer>
        <InputContainer>
          <label htmlFor="password">비밀번호</label>
          <Input type="password" id="password" name="password" placeholder="비밀번호를 입력해 주세요." onChange={handleChangeUser} />
        </InputContainer>
        <Button type="button" onClick={handleClickSignin} disabled={isValidate}>
          로그인
        </Button>
        <Description>
          회원이 아니신가요? <p onClick={handlePageSignup}> 회원가입</p>
        </Description>
      </Container>
    </Body>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  img {
    position: absolute;
    top: 21px;
    left: 21px;
  }
`;

const Title = styled.h2`
  position: absolute;
  top: 12%;
  color: ${styleTokenCss.color.gray2};
  font-size: 32px;
  font-weight: 600;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 83%;
  height: 10.9%;
  margin-bottom: 39px;

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
  position: relative;
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
  position: relative;
  width: 83%;
  height: 8%;
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
  }
`;

const Description = styled.h5`
  position: relative;
  margin-top: 10%;
  color: ${styleTokenCss.color.gray3};
  font-size: 14px;
  font-weight: 600;

  p {
    display: inline-block;
    cursor: pointer;
    text-decoration: underline;
    color: ${styleTokenCss.color.alert1};
  }
`;
