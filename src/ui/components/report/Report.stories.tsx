import styled from '@emotion/styled';
import { Meta, StoryObj } from '@storybook/react';
import { Report } from '@ui/components/report/Report';
import { mappedResultType } from '@lib/utils';

const meta: Meta<typeof Report> = {
  title: 'Component/Item',
  component: Report,
};

export default meta;

type Story = StoryObj<typeof Report>;

const dummyAnswer = {
  answer_id: 1,
  type: 'stress',
  answer: [
    { seq: 1, score: 3 },
    { seq: 2, score: 3 },
    { seq: 3, score: 3 },
    { seq: 4, score: 2 },
    { seq: 5, score: 1 },
    { seq: 6, score: 2 },
    { seq: 7, score: 2 },
    { seq: 8, score: 3 },
    { seq: 9, score: 2 },
    { seq: 10, score: 1 },
  ],
  sumScore: 22,
  create_date: '2024-01-01T20:24:54.000Z',
};

export const report: Story = {
  render: () => (
    <Container>
      <Report
        answer={dummyAnswer}
        date2DigitMonth="01"
        date2DigitDate="01"
        answerTitle={mappedResultType(dummyAnswer.sumScore)}
      />
    </Container>
  ),
};

const Container = styled.div`
  width: 400px;
  height: auto;
`;
