import styled from '@emotion/styled';
import { styleToken } from '@ui/styles';
import { PATH } from '@lib/const/path';
import { useNavigate } from 'react-router';
import { BaseButton, NavigationHeader, Typography } from '@ui/components/common';
import { Body } from '@ui/components/layout';
import { Score } from '@ui/components/report';
import { useAlert, useAxiosErrorAlert } from '@lib/hooks';
import { Menu } from '@ui/components/menu';
import { useEffect } from 'react';
import { http } from '../api/http';

export function TestResultPage() {
  const navigate = useNavigate();
  const alert = useAlert();
  const axiosErrorAlert = useAxiosErrorAlert();

  const handlePageNewTest = async () => {
    const isTry = await getIsAnswerableWithinWeek();

    if (isTry) {
      navigate('/report/question');
      return;
    }

    await alert({
      type: 'danger',
      title: '일주일 내의 검사 결과가 이미 존재합니다.',
    });
  };

  const handlePageReportList = () => {
    navigate('/');
  };

  const handlePageBack = () => {
    navigate(PATH.REPORT);
  };

  const getIsAnswerableWithinWeek = async () => {
    try {
      const response = await http.get<{ isTry: boolean }>('/answer/try');
      if (response.data) {
        console.log(response.data.isTry);
        return response.data.isTry;
      }
    } catch (e) {
      await axiosErrorAlert(e);
      return false;
    }
  };

  useEffect(() => {
    const getTestResult = async () => {
      const response = await http.get('/answer/3');
      if (response.data) {
        console.log(response.data);
      }
    };

    getTestResult();
  }, []);

  return (
    <>
      <NavigationHeader title="스트레스 측정하기" isBack onBack={handlePageBack} />
      <Container>
        <InfoContainer>
          <Typography variant="subtitle3" fontWeight={600}>
            나의 스트레스 결과
          </Typography>
          <Typography variant="h1" color={styleToken.color.primary} fontWeight={600} style={{ margin: 20 }}>
            31점
          </Typography>
          <Typography variant="body4" style={{ marginBottom: 14 }}>
            극심한 스트레스 상태로 보여집니다. 스트레스를 풀만한 여유가 없이 계속 쌓이게 되면, 시간이 지나면서
            줄어들기보다는, 몸과 마음을 언제 갑자기 무너뜨리게 될지 모르는 시한폭탄과도 같습니다. 조속한 시일내에
            전문가의 도움을 받아보실 것을 권해드립니다.
          </Typography>
        </InfoContainer>
        <InfoContainer style={{ marginTop: 20 }}>
          <Typography variant="subtitle3" fontWeight={600}>
            스트레스 점수표
          </Typography>
          <Score />
        </InfoContainer>
        <ButtonContainer>
          <BaseButton colorTheme="info" onClick={handlePageNewTest} minHeight="68px">
            새로 검사하기
          </BaseButton>
          <BaseButton colorTheme="info" onClick={handlePageReportList} style={{ marginTop: 22 }} minHeight="68px">
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
  padding: 5px 34px 15px 34px;
  width: 100%;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 22px;
  height: auto;
  margin-bottom: 6px;
  background-color: white;
  border-radius: 15px;
  border: 1px solid ${styleToken.color.gray5};
`;

const ButtonContainer = styled.div`
  margin-top: 46px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 116px;
`;
