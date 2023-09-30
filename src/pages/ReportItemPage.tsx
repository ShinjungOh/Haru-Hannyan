import styled from '@emotion/styled';
import { styleToken } from '@ui/styles';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';
import { Body } from '@ui/components/layout';
import { Score } from '@ui/components/report';
import { Menu } from '@ui/components/menu';
import { BaseButton, NavigationHeader, Typography } from '@ui/components/common';
import { useAlert, useAxiosErrorAlert } from '@lib/hooks';
import { ReportAnswers, ResultDetail } from '@lib/types';
import { mappedResultType, parseDate } from '@lib/utils';
import { http } from '../api/http';

export function ReportItemPage() {
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;
  const alert = useAlert();
  const axiosErrorAlert = useAxiosErrorAlert();

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

  const handleClickDeleteReport = async () => {
    await deleteReport();
  };

  const answerDate = parseDate(answer.create_date);

  const mappedResultDetails = () => {
    const mappedResult: ResultDetail = mappedResultType(answer.sumScore) || {
      color: '#ffffff',
      description: '',
      title: '',
    };
    setResult(mappedResult);
  };

  const deleteReport = async () => {
    try {
      const response = await http.delete<{ success: boolean }>(`/answer/${id}`);
      if (response) {
        const responseAlert = await alert({
          type: 'success',
          title: `${response.msg}`,
        });

        if (responseAlert) {
          navigate(-1);
        }
      }
    } catch (e) {
      await axiosErrorAlert(e);
    }
  };

  useEffect(() => {
    mappedResultDetails();
  }, [answer]);

  useEffect(() => {
    const getTestResult = async () => {
      const response = await http.get(`/answer/${id}`);
      console.log('response>>>>', response.data);
      if (response) {
        setAnswer(response?.data?.answer as any);
      }
    };

    getTestResult();
  }, []);

  return (
    <>
      <NavigationHeader title="스트레스 측정하기" isBack />
      <Container>
        {answer && (
          <InfoContainer>
            <Typography variant="subtitle4" color={styleToken.color.gray3}>
              {answerDate.year}년 {answerDate.month + 1}월 {answerDate.date}일
            </Typography>
            <Typography variant="subtitle3" fontWeight={600} style={{ marginTop: 26 }}>
              나의 스트레스 결과
            </Typography>
            <Typography variant="h1" color={result.color} fontWeight={600} style={{ margin: 20 }}>
              {answer.sumScore}점
            </Typography>
            <Typography variant="body4" style={{ marginBottom: 14, marginLeft: 18, marginRight: 18 }}>
              {result?.description}
            </Typography>
          </InfoContainer>
        )}
        <InfoContainer style={{ marginTop: 20 }}>
          <Typography variant="subtitle3" fontWeight={600}>
            스트레스 점수표
          </Typography>
          <Score />
        </InfoContainer>
        <ButtonContainer>
          <BaseButton colorTheme="primary" minHeight="68px" onClick={handleClickDeleteReport}>
            검사 기록 삭제하기
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
