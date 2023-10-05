import styled from '@emotion/styled';
import { useNavigate } from 'react-router';
import { PATH } from '@lib/const/path';
import { Body } from '@ui/components/layout';
import { Menu } from '@ui/components/menu';
import { BaseButton, Typography } from '@ui/components/common';
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
      navigate(PATH.HOME, { replace: true });
    }
  };

  return (
    <>
      <TitleContainer>
        <Typography variant="h3">마이 페이지</Typography>
      </TitleContainer>
      <ProfileContainer>
        <ProfileIcon>
          <img src="/images/icon/menu/feel-cat.svg" alt="하루한냥" />
        </ProfileIcon>
        <ProfileDetail>
          <Typography variant="subtitle3" fontWeight={600}>
            닉네임
          </Typography>
          <Typography variant="body3">haru-hannyan@gmail.com</Typography>
        </ProfileDetail>
      </ProfileContainer>
      <Container>
        <SettingContainer>
          <Typography variant="body3" color={styleToken.color.gray2} style={{ marginBottom: 6, paddingLeft: 8 }}>
            프로필
          </Typography>
          <InfoContainer>
            <SettingButton type="button">
              <Typography variant="body3">닉네임 변경하기</Typography>
            </SettingButton>
            <SettingButton type="button">
              <Typography variant="body3">비밀번호 변경하기</Typography>
            </SettingButton>
          </InfoContainer>
        </SettingContainer>
        <SettingContainer>
          <Typography variant="body3" color={styleToken.color.gray2} style={{ marginBottom: 6, paddingLeft: 8 }}>
            기록
          </Typography>
          <InfoContainer>
            <SettingButton type="button">
              <Typography variant="body3">총 일기 갯수</Typography>
              <Typography variant="body3" fontWeight={600} color={styleToken.color.secondaryActive}>
                15개
              </Typography>
            </SettingButton>
            <SettingButton type="button">
              <Typography variant="body3">총 검사 갯수</Typography>
              <Typography variant="body3" fontWeight={600} color={styleToken.color.secondaryActive}>
                3개
              </Typography>
            </SettingButton>
          </InfoContainer>
        </SettingContainer>
        <SettingContainer>
          <Typography variant="body3" color={styleToken.color.gray2} style={{ marginBottom: 6, paddingLeft: 8 }}>
            기타
          </Typography>
          <InfoContainer>
            <SettingButton type="button">
              <Typography variant="body3">하루한냥 개발 과정이 궁금하다면?</Typography>
            </SettingButton>
            <SettingButton type="button">
              <Typography variant="body3">개인정보처리방침</Typography>
            </SettingButton>
          </InfoContainer>
        </SettingContainer>
        <BaseButton colorTheme="primary" height="68px" minHeight="68px" onClick={handleClickLogout}>
          로그아웃
        </BaseButton>
      </Container>
      <Menu />
    </>
  );
}

const TitleContainer = styled.div`
  background-color: ${styleToken.color.background};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 22px 35px;
`;

const ProfileContainer = styled.div`
  border-bottom: 1px solid ${styleToken.color.gray4};
  background-color: ${styleToken.color.background};
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 22px 22px 40px;
  gap: 8px;
`;

const ProfileIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  // border: 1px solid ${styleToken.color.gray4};
  background-color: ${styleToken.color.primary}75;

  img {
    width: 54px;
    height: 54px;
  }
`;

const ProfileDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: auto;
  gap: 4px;
`;

const Container = styled(Body)`
  padding: 28px 34px 34px 34px;
  justify-content: flex-start;
  align-items: center;
  overflow-y: auto;
  gap: 20px;
`;

const SettingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: auto;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
  padding: 10px;
  width: 100%;
  height: auto;
  margin-bottom: 6px;
  background-color: white;
  border-radius: 15px;
  border: 1px solid ${styleToken.color.gray5};
  gap: 6px;
`;

const SettingButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  width: 100%;
  height: auto;
  padding: 14px 14px;
  background-color: white;
  border: unset;
  cursor: pointer;
`;
