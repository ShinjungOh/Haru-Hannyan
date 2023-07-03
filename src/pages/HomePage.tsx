import Body from '@ui/components/layout/Body';
import styled from '@emotion/styled';
import styleTokenCss from '@ui/styles/styleToken.css';

export default function HomePage() {
  return (
    <Body>
      <Container>
        <img src="../../public/images/icon/menu/feel-cat.svg" alt="하루한냥" />
        <Title>하루한냥</Title>
        <Description>나만의 고양이를 모아보세요</Description>
        <Button style={{ backgroundColor: styleTokenCss.color.sub }}>이메일로 로그인</Button>
        <Button style={{ backgroundColor: styleTokenCss.color.kakao }}>카카오로 로그인</Button>
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

  img {
    width: 100px;
    height: 100px;
    margin-top: 28%;
  }
`;

const Title = styled.h1`
  margin-top: 20px;
  color: ${styleTokenCss.color.gray2};
  font-size: 45px;
  font-weight: 600;
`;

const Description = styled.h5`
  margin-top: 15px;
  margin-bottom: 60%;
  color: ${styleTokenCss.color.gray3};
  font-size: 14px;
  font-weight: 600;
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

  & + & {
    margin-top: 20px;
    margin-bottom: 20%;
  }
`;
