import { Body } from '@ui/components/layout';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router';
import { PATH } from '@lib/const/path';
import { KAKAO_AUTH_URL } from '@lib/const/config';
import { SignButton } from '@ui/components/common';
import styleToken from '@ui/styles/styleToken.css';

export function HomePage() {
  const navigate = useNavigate();

  const handlePageSignin = () => {
    navigate(PATH.SIGN_IN);
  };

  const handlePageAuthKakao = () => {
    location.href = KAKAO_AUTH_URL;
  };

  return (
    <Container>
      <TitleContainer>
        <img src="/images/icon/menu/feel-cat.svg" alt="하루한냥" />
        <Title>하루한냥</Title>
        <Description>나만의 고양이를 모아보세요</Description>
      </TitleContainer>
      <ButtonContainer>
        <SignButton
          text="이메일로 로그인"
          backgroundColor={styleToken.color.secondary}
          color={styleToken.color.gray2}
          onClick={handlePageSignin}
        />
        <SignButton
          text="카카오로 로그인"
          imgSrc="/images/icon/kakao.svg"
          backgroundColor={styleToken.color.kakao}
          color={styleToken.color.gray2}
          onClick={handlePageAuthKakao}
        />
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
  color: ${styleToken.color.gray2};
  font-size: 45px;
  font-weight: 600;
`;

const Description = styled.h5`
  margin-top: 15px;
  color: ${styleToken.color.gray3};
  font-size: 14px;
  font-weight: 600;
`;

const ButtonContainer = styled.div`
  margin-top: 100px;
  width: 100%;

  Button + Button {
    margin-top: 20px;
  }
`;
