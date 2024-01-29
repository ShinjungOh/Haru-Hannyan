import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Body } from '@ui/components/layout';
import { Menu } from '@ui/components/menu';
import { EmptyItem, NavigationHeader } from '@ui/components/common';
import { ReportAnswers } from '@lib/types';
import { mappedResultType, parseDate } from '@lib/utils';
import { useAxiosErrorAlert } from '@lib/hooks';
import { Report } from '@ui/components/report';
import { apiGetAnswers } from '../api/report';

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
        const responseGetAnswers = await apiGetAnswers();
        if (responseGetAnswers.success && responseGetAnswers.data) {
          setAnswers(responseGetAnswers.data.answers);
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
              <Report
                key={answer.answer_id}
                answer={answer}
                date2DigitMonth={date2DigitMonth}
                date2DigitDate={date2DigitDate}
                answerTitle={answerTitle}
                onClick={handlePageReportItem}
              />
            );
          })
        ) : (
          <EmptyItem description="측정한 기록이 없어요." />
        )}
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
