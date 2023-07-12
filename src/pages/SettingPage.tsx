import Body from '@ui/components/layout/Body';
import Menu from '@ui/components/layout/Menu';
import SignButton from '@ui/components/SignButton';
import styleTokenCss from '@ui/styles/styleToken.css';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router';
import { PATH } from '@lib/const/path';

export default function SettingPage() {
  const navigate = useNavigate();

  const handleClickLogout = () => {
    const isLogout = confirm('로그아웃 하시겠습니까?');
    if (isLogout) {
      localStorage.removeItem('ACCESS_TOKEN');
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
