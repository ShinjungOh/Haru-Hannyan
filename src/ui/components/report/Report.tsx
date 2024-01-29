import styled from '@emotion/styled';
import { styleToken } from '@ui/styles';
import { Typography } from '@ui/components/common';
import { ReportAnswers } from '@lib/types';

type ReportProps = {
  answer: ReportAnswers;
  date2DigitMonth: string | number;
  date2DigitDate: string | number;
  answerTitle: {
    color: string;
    description: string;
    title: string;
  };
  onClick: (id: number) => void;
};

export function Report({ answer, date2DigitMonth, date2DigitDate, answerTitle, onClick }: ReportProps) {
  return (
    <InfoContainer key={answer.answer_id} onClick={() => onClick(answer.answer_id)}>
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
}

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
