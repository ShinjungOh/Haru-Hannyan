import styled from '@emotion/styled';
import { styleToken } from '@ui/styles';
import { useNavigate } from 'react-router';
import { Body } from '@ui/components/layout';
import { SignButton, Typography } from '@ui/components/common';
import { PATH } from '@lib/const/path';
import { KAKAO_AUTH_URL } from '@lib/const/config';

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
        <Typography
          variant="h1"
          color={styleToken.color.gray2}
          fontSize="42px"
          fontWeight={600}
          style={{ marginTop: 8 }}
        >
          하루한냥
        </Typography>
        <Typography variant="body3" color={styleToken.color.gray3} fontWeight={600} style={{ marginTop: 6 }}>
          나만의 고양이를 모아보세요
        </Typography>
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
  padding: 100px 34px;
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

const ButtonContainer = styled.div`
  width: 100%;

  Button + Button {
    margin-top: 20px;
  }
`;
