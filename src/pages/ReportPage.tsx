import styled from '@emotion/styled';
import { styleToken } from '@ui/styles';
import { Menu } from '@ui/components/menu';
import { Body } from '@ui/components/layout';
import { BaseButton, NavigationHeader, Typography } from '@ui/components/common';
import { useNavigate } from 'react-router';
import { useAlert, useAxiosErrorAlert } from '@lib/hooks';
import { PATH } from '@lib/const/path';
import { apiGetTry } from '../api/report';

export function ReportPage() {
  const navigate = useNavigate();
  const alert = useAlert();
  const axiosErrorAlert = useAxiosErrorAlert();

  const handlePageNewTest = async () => {
    const isTry = await getIsAnswerableWithinWeek();

    if (isTry) {
      navigate(PATH.REPORT_QUESTION);
      return;
    }

    await alert({
      type: 'danger',
      title: '일주일 내의 검사 결과가 이미 존재합니다.',
    });
  };

  const handlePageReportList = () => {
    navigate(PATH.REPORT_ANSWER);
  };

  const getIsAnswerableWithinWeek = async () => {
    try {
      const responseGetTry = await apiGetTry();
      if (responseGetTry.success && responseGetTry.data) {
        return responseGetTry.data.isTry;
      }
    } catch (e) {
      await axiosErrorAlert(e);
      return false;
    }
  };

  return (
    <>
      <NavigationHeader title="스트레스 측정하기" isBack={false} />
      <Container>
        <InfoContainer>
          <Typography variant="subtitle3" fontWeight={600}>
            나의 스트레스 측정하기
          </Typography>
          <Typography variant="body4" style={{ marginTop: 10 }}>
            일주일 동안의 상태를 돌아보며 건강한 마음을 유지하고
            <br />
            스스로와 가까워지기 위한 스트레스 자가진단입니다.
          </Typography>
        </InfoContainer>
        <ButtonContainer>
          <BaseButton colorTheme="info" onClick={handlePageNewTest}>
            새로 검사하기
          </BaseButton>
          <BaseButton colorTheme="info" onClick={handlePageReportList} style={{ marginTop: 22 }}>
            이전 검사결과 보기
          </BaseButton>
        </ButtonContainer>
      </Container>
      <Menu />
    </>
  );
}

const Container = styled(Body)`
  overflow-y: auto;
  padding: 4px 20px 14px 20px;
  width: 100%;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 22px;
  min-height: 116px;
  background-color: white;
  border-radius: 15px;
  border: 1px solid ${styleToken.color.gray5};
  text-align: center;
`;

const ButtonContainer = styled.div`
  margin-top: 46px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
