import Body from '@ui/components/layout/Body';
import styled from '@emotion/styled';
import styleTokenCss from '@ui/styles/styleToken.css';

export default function SigninPage() {
  return (
    <Body>
      <Container>
        <Title>로그인</Title>
        <InputContainer>
          <label>이메일</label>
          <Input placeholder="이메일을 입력해 주세요." />
        </InputContainer>
        <InputContainer>
          <label>비밀번호</label>
          <Input placeholder="비밀번호를 입력해 주세요." />
        </InputContainer>
        <Button>로그인</Button>
        <Description>
          회원이 아니신가요? <span> 회원가입</span>
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
  color: ${styleTokenCss.color.gray4};
  font-size: 17px;
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
  color: ${styleTokenCss.color.gray2};
  font-size: 17px;
  font-weight: 600;
  cursor: pointer;
`;

const Description = styled.h5`
  position: relative;
  margin-top: 10%;
  color: ${styleTokenCss.color.gray3};
  font-size: 14px;
  font-weight: 600;

  span {
    cursor: pointer;
    text-decoration: underline;
    color: ${styleTokenCss.color.alert1};
  }
`;
