import styled from '@emotion/styled';
import { styleToken } from '@ui/styles';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';
import { Body } from '@ui/components/layout';
import { Score } from '@ui/components/report';
import { Menu } from '@ui/components/menu';
import { BaseButton, NavigationHeader, Typography } from '@ui/components/common';
import { useAlert, useAxiosErrorAlert, useConfirm } from '@lib/hooks';
import { ReportAnswers, ResultDetail } from '@lib/types';
import { mappedResultType, parseDate } from '@lib/utils';
import { PATH } from '@lib/const/path';
import { apiDeleteAnswer, apiGetAnswer } from '../api/report';

export function ReportItemPage() {
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;
  const alert = useAlert();
  const confirm = useConfirm();
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

  const parseId = Number(id);

  const handlePageBack = () => {
    navigate(-1);
  };

  const handlePageReportList = () => {
    navigate(PATH.REPORT_ANSWER);
  };

  const handleClickDeleteReport = async () => {
    const responseConfirm = await confirm({
      type: 'delete',
      title: '기록을 삭제할까요?',
      description: '스트레스 측정 기록이 사라져요.',
    });

    if (responseConfirm) {
      await deleteReport();
    }
  };

  const answerDate = parseDate(answer.create_date);

  const mappedResultDetails = () => {
    const mappedResult: ResultDetail = mappedResultType(answer.sumScore);
    setResult(mappedResult);
  };

  const deleteReport = async () => {
    try {
      const responseDeleteAnswer = await apiDeleteAnswer(parseId);

      if (responseDeleteAnswer.success) {
        const responseAlert = await alert({
          type: 'success',
          title: `${responseDeleteAnswer.msg}`,
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
      try {
        const responseGetAnswer = await apiGetAnswer(parseId);
        if (responseGetAnswer.success && responseGetAnswer.data) {
          setAnswer(responseGetAnswer.data.answer);
        }
      } catch (e) {
        await axiosErrorAlert(e);
      }
    };

    getTestResult();
  }, []);

  return (
    <>
      <NavigationHeader title="스트레스 측정하기" isBack onBack={handlePageBack} />
      <Container>
        {answer && (
          <InfoContainer>
            <Typography variant="subtitle4" color={styleToken.color.gray3}>
              {answerDate.year}년 {answerDate.month + 1}월 {answerDate.date}일
            </Typography>
            <Typography variant="subtitle3" fontWeight={600} style={{ marginTop: 10 }}>
              나의 스트레스 결과
            </Typography>
            <Typography variant="h1" color={result.color} fontWeight={600} style={{ margin: 20 }}>
              {answer.sumScore}점
            </Typography>
            <Typography variant="body4" style={{ marginLeft: 8, marginRight: 8 }}>
              {result?.description}
            </Typography>
          </InfoContainer>
        )}
        <InfoContainer style={{ marginTop: 14 }}>
          <Typography variant="subtitle3" fontWeight={600}>
            스트레스 점수표
          </Typography>
          <Score />
        </InfoContainer>
        <ButtonContainer>
          <BaseButton colorTheme="info" minHeight="54px" onClick={handleClickDeleteReport}>
            검사 기록 삭제하기
          </BaseButton>
          <BaseButton colorTheme="info" minHeight="54px" onClick={handlePageReportList} style={{ marginTop: 18 }}>
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
  margin-top: 26px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: auto;
`;
