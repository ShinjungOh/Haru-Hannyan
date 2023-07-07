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
    <Container>
      <TitleContainer>
        <img src="/images/icon/menu/feel-cat.svg" alt="하루한냥" />
        <Title>하루한냥</Title>
        <Description>나만의 고양이를 모아보세요</Description>
      </TitleContainer>
      <ButtonContainer>
        <Button onClick={handlePageSignin} style={{ backgroundColor: styleTokenCss.color.sub }}>
          이메일로 로그인
        </Button>
        <Button style={{ backgroundColor: styleTokenCss.color.kakao }}>
          <img src="/images/icon/kakao.svg" alt="카카오 로그인" />
          카카오로 로그인
        </Button>
      </ButtonContainer>
    </Container>
  );
}

const Container = styled(Body)`
  padding: 100px 35px;
  justify-content: space-between;
  align-items: center;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;

  img {
    width: 100px;
    height: 100px;
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
  color: ${styleTokenCss.color.gray3};
  font-size: 14px;
  font-weight: 600;
`;

const ButtonContainer = styled.div`
  margin-top: 100px;
  width: 100%;
`;
const Button = styled.button`
  width: 100%;
  height: 71px;
  min-height: 65px;
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
