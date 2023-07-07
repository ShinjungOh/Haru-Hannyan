import Body from '@ui/components/layout/Body';
import styled from '@emotion/styled';
import styleTokenCss from '@ui/styles/styleToken.css';
import { ChangeEvent, useMemo, useState } from 'react';
import { useNavigate } from 'react-router';
import { PATH } from '@lib/const/path';
import { User, UserValidation } from '@lib/types/user';
import NavigationHeader from '@ui/components/layout/NavigationHeader';
import getValidationUser from '@lib/utils/getValidationUser';
import SignButton from '@ui/components/SignButton';
import InputBox from '@ui/components/InputBox';

export default function SignupPage() {
  const [user, setUser] = useState<User>({
    email: '',
    password: '',
    passwordCheck: '',
    name: '',
  });
  const [userValidation, setUserValidation] = useState<UserValidation>({
    email: false,
    password: false,
    passwordCheck: false,
    name: false,
  });
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const handleChangeUser = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let test = getValidationUser(name as 'email' | 'password' | 'name', value);

    if (name === 'passwordCheck' && user.password === value) {
      test = true;
    }

    setUser({
      ...user,
      [name]: value,
    });

    setUserValidation({
      ...userValidation,
      [name]: test,
    });
  };

  const handleChangeCheckBox = (e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  const isDisabledSubmit = useMemo(
    () =>
      !(
        userValidation.email &&
        userValidation.password &&
        userValidation.passwordCheck &&
        userValidation.name &&
        isChecked
      ),
    [userValidation.email, userValidation.password, userValidation.passwordCheck, userValidation.name, isChecked],
  );

  const handlePageSignUp = () => {
    alert('회원가입에 성공했습니다!');
    navigate(PATH.CALENDAR);
  };

  return (
    <>
      <NavigationHeader />
      <Container>
        <Title>회원가입</Title>
        <InputContainer>
          <label htmlFor="email">이메일</label>
          <InputBox
            type="email"
            id="email"
            name="email"
            placeholder="이메일을 입력해 주세요."
            onChange={handleChangeUser}
          />
          <ErrorMessage>
            {user.email.length > 0 && !userValidation.email && '이메일 형식이 올바르지 않습니다.'}
          </ErrorMessage>
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
          <ErrorMessage>
            {user.password.length > 0 &&
              user.password.length < 9 &&
              !userValidation.password &&
              '8글자 이상 입력해 주세요.'}
          </ErrorMessage>
        </InputContainer>
        <InputContainer>
          <label htmlFor="passwordCheck">비밀번호 확인</label>
          <InputBox
            type="password"
            id="passwordCheck"
            name="passwordCheck"
            placeholder="비밀번호를 다시 입력해 주세요."
            onChange={handleChangeUser}
          />
          <ErrorMessage>
            {user.passwordCheck.length > 0 && !userValidation.passwordCheck && '비밀번호가 일치하지 않습니다.'}
          </ErrorMessage>
        </InputContainer>
        <InputContainer>
          <label htmlFor="name">닉네임</label>
          <InputBox
            type="text"
            id="name"
            name="name"
            placeholder="닉네임을 입력해 주세요."
            onChange={handleChangeUser}
          />
          <ErrorMessage>
            {user.name.length > 0 && user.name.length < 2 && '닉네임 형식이 올바르지 않습니다.'}
          </ErrorMessage>
        </InputContainer>
        <CheckBoxContainer>
          <input
            type="checkbox"
            id="checkbox"
            name="checkbox"
            value="terms"
            checked={isChecked}
            onChange={handleChangeCheckBox}
          />
          <CheckBox htmlFor="checkbox">[필수] 개인정보 수집 및 이용 동의</CheckBox>
        </CheckBoxContainer>
        <SignButton text="회원가입" disabled={isDisabledSubmit} onClick={handlePageSignUp} />
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
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${styleTokenCss.color.gray2};
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 48px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100px;
  min-height: 85px;
  margin-bottom: 39px;

  label {
    width: 100%;
    height: 15px;
    padding-left: 3px;
    margin-bottom: 8px;
    color: ${styleTokenCss.color.gray3};
    font-size: 15px;
  }

  & + & {
    margin-bottom: 42px;
  }
`;

const ErrorMessage = styled.p`
  color: ${styleTokenCss.color.alert2};
  width: 100%;
  height: 15px;
  padding-left: 10px;
  margin-top: 7px;
  font-size: 14px;
`;

const CheckBoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;

  input {
    width: 22px;
    height: 22px;
    margin-right: 10px;
    accent-color: ${styleTokenCss.color.sub};
  }
`;

const CheckBox = styled.label`
  color: ${styleTokenCss.color.gray3};
  font-size: 15px;
`;
