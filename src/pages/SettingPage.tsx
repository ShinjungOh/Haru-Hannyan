import Body from '@ui/components/layout/Body';
import Menu from '@ui/components/menu/Menu';
import SignButton from '@ui/components/common/SignButton';
import styleTokenCss from '@ui/styles/styleToken.css';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router';
import { PATH } from '@lib/const/path';
import useConfirm from '@lib/hooks/useConfirm';

export default function SettingPage() {
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
        <SignButton
          text="로그아웃"
          backgroundColor={styleTokenCss.color.secondaryActive}
          color={styleTokenCss.color.white}
          onClick={handleClickLogout}
        />
      </Container>
      <Menu />
    </>
  );
}

const Title = styled.h2`
  background-color: ${styleTokenCss.color.background};
  color: ${styleTokenCss.color.gray2};
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
