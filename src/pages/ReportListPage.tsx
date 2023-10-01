import styled from '@emotion/styled';
import { styleToken } from '@ui/styles';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Body } from '@ui/components/layout';
import { Menu } from '@ui/components/menu';
import { NavigationHeader, Typography } from '@ui/components/common';
import { ReportAnswers } from '@lib/types';
import { mappedResultType, parseDate } from '@lib/utils';
import { useAxiosErrorAlert } from '@lib/hooks';
import { http } from '../api/http';

export function ReportListPage() {
  const navigate = useNavigate();
  const axiosErrorAlert = useAxiosErrorAlert();

  const [answers, setAnswers] = useState<ReportAnswers[]>([]);

  const handlePageReportItem = (id: number) => {
    navigate(`/report/answer/${id}`);
  };

  useEffect(() => {
    const getReportsList = async () => {
      try {
        const response = await http.get<{ answers: ReportAnswers[] }>('/answer');
        if (response.data) {
          setAnswers(response.data.answers);
        }
      } catch (e) {
        await axiosErrorAlert(e);
      }
    };

    getReportsList();
  }, []);

  return (
    <>
      <NavigationHeader title="스트레스 측정하기" isBack />
      <Container>
        {answers && answers.length > 0 ? (
          answers.map((answer) => {
            const answerDate = parseDate(answer.create_date);
            const parseMonth = answerDate.month + 1;
            const date2DigitMonth = parseMonth < 10 ? `0${parseMonth}` : parseMonth;
            const date2DigitDate = answerDate.date < 10 ? `0${answerDate.date}` : answerDate.date;
            const answerTitle = mappedResultType(answer.sumScore);

            return (
              <InfoContainer key={answer.answer_id} onClick={() => handlePageReportItem(answer.answer_id)}>
                <DetailContainer>
                  <Typography variant="h4" color={styleToken.color.gray1}>
                    {date2DigitMonth}/{date2DigitDate}
                  </Typography>
                  <DayName color={answerTitle.color}>
                    <Typography variant="body4" fontWeight={400} color={styleToken.color.white}>
                      {answerTitle.title}
                    </Typography>
                  </DayName>
                </DetailContainer>
                <Typography variant="h2" color={answerTitle.color} fontWeight={600}>
                  {answer.sumScore}점
                </Typography>
              </InfoContainer>
            );
          })
        ) : (
          <EmptyContainer>
            <Typography variant="subtitle3" color={styleToken.color.gray3} fontWeight={400}>
              측정한 기록이 없어요.
            </Typography>
          </EmptyContainer>
        )}
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
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 32px 38px 32px 32px;
  height: auto;
  margin-bottom: 18px;
  background-color: white;
  border-radius: 15px;
  border: 1px solid ${styleToken.color.gray5};
  cursor: pointer;
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`;

const DayName = styled.div<{ color: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px;
  height: 24px;
  border-radius: 6px;
  border: none;
  background-color: ${(props) => props.color};
`;

const EmptyContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 18px;
  height: 100px;
  background-color: white;
  border-radius: 15px;
  border: 1px solid ${styleToken.color.gray5};
  font-size: 14px;
  cursor: pointer;
`;
