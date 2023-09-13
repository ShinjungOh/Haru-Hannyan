import styled from '@emotion/styled';
import { useNavigate } from 'react-router';
import { PATH } from '@lib/const/path';
import { Body } from '@ui/components/layout';
import { Menu } from '@ui/components/menu';
import { BaseButton } from '@ui/components/common';
import { useConfirm } from '@lib/hooks';
import { styleToken } from '@ui/styles';

export function SettingPage() {
  const navigate = useNavigate();
  const confirm = useConfirm();

  const handleClickLogout = async () => {
    const responseConfirm = await confirm({
      type: 'delete',
      title: '로그아웃 하시겠습니까?',
      description: '하루한냥 홈으로 이동합니다.',
    });
    if (responseConfirm) {
      localStorage.clear();
      navigate(PATH.HOME);
    }
  };

  return (
    <>
      <Title>마이 페이지</Title>
      <Container>
        <BaseButton
          colorTheme="primary"
          onClick={handleClickLogout}
          style={{
            margin: '10px',
          }}
        >
          로그아웃
        </BaseButton>
      </Container>
      <Menu />
    </>
  );
}

const Title = styled.h2`
  background-color: ${styleToken.color.background};
  color: ${styleToken.color.gray2};
  font-size: 24px;
  font-weight: 600;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100px;
  padding: 35px;
`;

const Container = styled(Body)`
  padding: 35px;
  justify-content: flex-start;
  align-items: center;
  overflow-y: auto;
`;
