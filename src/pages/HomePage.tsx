import Body from '@ui/components/layout/Body';
import styled from '@emotion/styled';
import styleTokenCss from '@ui/styles/styleToken.css';
import { useNavigate } from 'react-router';
import { PATH } from '@lib/const/path';

export default function HomePage() {
  const navigate = useNavigate();

  const handlePageSignin = () => {
    navigate(PATH.SIGN_IN);
  };

  return (
    <Body>
      <Container>
        <TitleContainer>
          <img src="../../public/images/icon/menu/feel-cat.svg" alt="하루한냥" />
          <Title>하루한냥</Title>
          <Description>나만의 고양이를 모아보세요</Description>
        </TitleContainer>
        <Button onClick={handlePageSignin} style={{ backgroundColor: styleTokenCss.color.sub }}>
          이메일로 로그인
        </Button>
        <Button style={{ backgroundColor: styleTokenCss.color.kakao }}>
          <img src="../../public/images/icon/kakao.svg" alt="카카오 로그인" />
          카카오로 로그인
        </Button>
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
  }
`;

const TitleContainer = styled.h1`
  position: relative;
  bottom: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40%;
`;

const Title = styled.h1`
  margin-top: 20px;
  color: ${styleTokenCss.color.gray2};
  font-size: 45px;
  font-weight: 600;
`;

const Description = styled.h5`
  margin-top: 15px;
  color: ${styleTokenCss.color.gray3};
  font-size: 14px;
  font-weight: 600;
`;

const Button = styled.button`
  position: relative;
  top: 10%;
  width: 83%;
  height: 8%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  border: none;
  color: ${styleTokenCss.color.gray2};
  font-size: 17px;
  font-weight: 600;
  cursor: pointer;
  padding: 10px;

  & + & {
    margin-top: 20px;
  }

  img {
    width: 22px;
    height: 22px;
    margin-top: 0;
    margin-right: 5px;
  }
`;
