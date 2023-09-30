import styled from '@emotion/styled';
import { styleToken } from '@ui/styles';
import { PATH } from '@lib/const/path';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';
import { Body } from '@ui/components/layout';
import { Score } from '@ui/components/report';
import { Menu } from '@ui/components/menu';
import { BaseButton, NavigationHeader, Typography } from '@ui/components/common';
import { ReportAnswers, ResultDetail } from '@lib/types';
import { mappedResultType } from '@lib/utils';
import { http } from '../api/http';

export function TestResultPage() {
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;

  const [answer, setAnswer] = useState<ReportAnswers>({
    answer_id: 0,
    type: 'stress',
    answer: [],
    sumScore: 0,
    create_date: '2000-01-01T00:00:00',
  });
  const [result, setResult] = useState<ResultDetail>({
    color: '',
    description: '',
    title: '',
  });

  const handlePageReportList = () => {
    navigate(PATH.REPORTLIST);
  };

  const handlePageBack = () => {
    navigate(PATH.REPORT);
  };

  const mappedResultDetails = () => {
    const mappedResult = mappedResultType(answer.sumScore);
    setResult(mappedResult);
  };

  useEffect(() => {
    mappedResultDetails();
  }, [answer]);

  useEffect(() => {
    const getTestResult = async () => {
      const response = await http.get<{ data: { answer: ReportAnswers } }>(`/answer/${id}`);
      console.log(response);
      if (response.data) {
        setAnswer(response.data?.answer || []);
      }
    };

    getTestResult();
  }, [id]);

  return (
    <>
      <NavigationHeader title="스트레스 측정하기" isBack onBack={handlePageBack} />
      <Container>
        <InfoContainer>
          <Typography variant="subtitle3" fontWeight={600}>
            나의 스트레스 결과
          </Typography>
          <Typography variant="h1" color={result.color} fontWeight={600} style={{ margin: 20 }}>
            {answer.sumScore}점
          </Typography>
          <Typography variant="body4" style={{ marginBottom: 14, marginLeft: 18, marginRight: 18 }}>
            {result?.description}
          </Typography>
        </InfoContainer>
        <InfoContainer style={{ marginTop: 20 }}>
          <Typography variant="subtitle3" fontWeight={600}>
            스트레스 점수표
          </Typography>
          <Score />
        </InfoContainer>
        <ButtonContainer>
          <BaseButton colorTheme="info" onClick={handlePageReportList} minHeight="68px">
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
