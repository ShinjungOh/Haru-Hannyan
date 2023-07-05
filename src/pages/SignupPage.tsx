import Body from '@ui/components/layout/Body';
import styled from '@emotion/styled';
import styleTokenCss from '@ui/styles/styleToken.css';

export default function SignupPage() {
  return (
    <Body>
      <Container>
        <img src="/images/icon/back.png" alt="back" />
        <Title>회원가입</Title>
        <InputContainer>
          <label htmlFor="email">이메일</label>
          <Input type="email" id="email" name="email" placeholder="이메일을 입력해 주세요." />
          <ErrorMessage>이메일 형식이 올바르지 않습니다.</ErrorMessage>
        </InputContainer>
        <InputContainer>
          <label htmlFor="password">비밀번호</label>
          <Input type="password" id="password" name="password" placeholder="비밀번호를 입력해 주세요." />
          <ErrorMessage>비밀번호 형식이 올바르지 않습니다.</ErrorMessage>
        </InputContainer>
        <InputContainer>
          <label htmlFor="passwordCheck">비밀번호 확인</label>
          <Input type="password" id="passwordCheck" name="password" placeholder="비밀번호를 다시 입력해 주세요." />
          <ErrorMessage>{'  '}비밀번호가 일치하지 않습니다.</ErrorMessage>
        </InputContainer>
        <InputContainer>
          <label htmlFor="name">닉네임</label>
          <Input type="text" id="name" name="name" placeholder="닉네임을 입력해 주세요." />
          <ErrorMessage>{'  '}닉네임 형식이 올바르지 않습니다.</ErrorMessage>
        </InputContainer>
        <CheckBoxContainer>
          <input type="checkbox" />
          <CheckBox>[필수] 개인정보 수집 및 이용 동의</CheckBox>
        </CheckBoxContainer>
        <Button type="button">회원가입</Button>
      </Container>
    </Body>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: auto;

  img {
    position: absolute;
    top: 21px;
    left: 21px;
  }
`;

const Title = styled.h2`
  position: relative;
  top: 8%;
  width: 100%;
  height: 5%;
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
  position: relative;
  top: 8%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 83%;
  height: 100px;
  margin-bottom: 39px;

  label {
    width: 100%;
    height: 15px;
    padding: 3px;
    margin-bottom: 10px;
    color: ${styleTokenCss.color.gray3};
  }

  & + & {
    margin-bottom: 42px;
  }
`;

const ErrorMessage = styled.p`
  color: ${styleTokenCss.color.alert2};
  width: 100%;
  padding-left: 10px;
  margin-top: 7px;
  font-size: 14px;
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

const CheckBoxContainer = styled.div`
  position: relative;
  top: 3%;
  width: 83%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 30px;

  input {
    width: 22px;
    height: 22px;
    margin-right: 10px;
  }
`;

const CheckBox = styled.h5`
  color: ${styleTokenCss.color.gray3};
  font-size: 15px;
  font-weight: 600;
`;

const Button = styled.button`
  position: relative;
  top: 7%;
  width: 83%;
  height: 8%;
  padding: 22px;
  margin-bottom: 40px;
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
