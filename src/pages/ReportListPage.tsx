import styled from '@emotion/styled';
import { styleToken } from '@ui/styles';
import { useNavigate } from 'react-router';
import { Body } from '@ui/components/layout';
import { Menu } from '@ui/components/menu';
import { NavigationHeader, Typography } from '@ui/components/common';
import { PATH } from '@lib/const/path';
import { useEffect, useState } from 'react';
import { resultDetail } from '@lib/const/reportQnA';
import { ReportAnswers } from '@lib/types';
import { http } from '../api/http';

export function ReportListPage() {
  const [answers, setAnswers] = useState<ReportAnswers[]>([]);

  const navigate = useNavigate();

  const handlePageReportItem = () => {
    navigate(PATH.REPORTITEM);
  };

  const mappedResultType = (num: number) => {
    if (num > 22) {
      const { color, description, title } = resultDetail.위험;
      return { color, description, title };
    }

    if (num > 16 && num <= 22) {
      const { color, description, title } = resultDetail.중증;
      return { color, description, title };
    }

    if (num > 13 && num <= 16) {
      const { color, description, title } = resultDetail.경도;
      return { color, description, title };
    }

    if (num > 0 && num <= 13) {
      const { color, description, title } = resultDetail.정상;
      return { color, description, title };
    }
  };

  const parseDate = (date) => {
    const createDate = new Date(date);
    const year = createDate.getFullYear();
    const month = createDate.getMonth();
    const data = createDate.getDate();
    return { year, month, data };
  };

  useEffect(() => {
    const getReportsList = async () => {
      const response = await http.get<{ data: { answers: ReportAnswers[] } }>('/answer');
      if (response) {
        setAnswers(response.data.answers);
        console.log(response.data.answers);
      }
    };

    getReportsList();
  }, []);

  return (
    <>
      <NavigationHeader title="스트레스 측정하기" isBack />
      <Container>
        {answers.length > 0 ? (
          answers.map((answer) => {
            const answerDate = parseDate(answer.create_date);
            const date2DigitMonth = answerDate.month < 10 ? `0${answerDate.month}` : answerDate.month;
            const date2DigitDate = answerDate.data < 10 ? `0${answerDate.data}` : answerDate.data;
            const answerTitle = mappedResultType(answer.sumScore);

            return (
              <InfoContainer key={answer.answer_id} onClick={handlePageReportItem}>
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
