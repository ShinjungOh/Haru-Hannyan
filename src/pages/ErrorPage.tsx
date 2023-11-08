import styled from '@emotion/styled';
import { styleToken } from '@ui/styles';
import { useNavigate } from 'react-router';
import { Body } from '@ui/components/layout';
import { BaseButton, EmptyItem, NavigationHeader, Typography } from '@ui/components/common';
import { PATH } from '@lib/const/path';

export function ErrorPage() {
  const navigate = useNavigate();

  const handleClickPageHome = () => {
    navigate(PATH.HOME);
  };

  return (
    <>
      <NavigationHeader isBack />
      <Container>
        <TitleContainer>
          <h2 style={{ fontWeight: 800, fontSize: 70, color: styleToken.color.primary, textAlign: 'center' }}>4</h2>
          <img src="/images/icon/menu/feel-cat.svg" alt="하루한냥" />
          <h2 style={{ fontWeight: 800, fontSize: 70, color: styleToken.color.primary, textAlign: 'center' }}>4</h2>
        </TitleContainer>
        <Typography variant="h3" fontWeight={900} style={{ textAlign: 'center' }}>
          페이지를 찾을 수 없어요.
        </Typography>
        <EmptyItem
          description={
            '입력한 주소가 잘못되었거나,\n사용이 일시 중단되어 요청한 페이지를 찾을 수 없어요.\n입력한 주소를 다시 확인해 주세요.'
          }
          fontSize="12px"
          style={{ marginTop: 80 }}
        />
        <BaseButton colorTheme="primary" onClick={handleClickPageHome} style={{ marginTop: 30 }}>
          하루한냥 홈으로 이동
        </BaseButton>
      </Container>
    </>
  );
}

const Container = styled(Body)`
  overflow-y: auto;
  padding: 4px 20px 14px 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TitleContainer = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  img {
    width: 70px;
    height: 70px;
  }
`;
