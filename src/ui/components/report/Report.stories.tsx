import styled from '@emotion/styled';
import { Meta, StoryObj } from '@storybook/react';
import { Report } from '@ui/components/report/Report';
import { mappedResultType } from '@lib/utils';

const meta: Meta<typeof Report> = {
  title: 'Component/Report',
  component: Report,
};

export default meta;

type Story = StoryObj<typeof Report>;

const dummyAnswer = [
  {
    answer_id: 1,
    type: 'stress',
    answer: [
      { seq: 1, score: 1 },
      { seq: 2, score: 1 },
      { seq: 3, score: 1 },
      { seq: 4, score: 1 },
      { seq: 5, score: 1 },
      { seq: 6, score: 1 },
      { seq: 7, score: 1 },
      { seq: 8, score: 1 },
      { seq: 9, score: 1 },
      { seq: 10, score: 1 },
    ],
    sumScore: 10,
    create_date: '2024-01-01T20:24:54.000Z',
  },
  {
    answer_id: 2,
    type: 'stress',
    answer: [
      { seq: 1, score: 1 },
      { seq: 2, score: 1 },
      { seq: 3, score: 1 },
      { seq: 4, score: 1 },
      { seq: 5, score: 1 },
      { seq: 6, score: 1 },
      { seq: 7, score: 1 },
      { seq: 8, score: 1 },
      { seq: 9, score: 3 },
      { seq: 10, score: 4 },
    ],
    sumScore: 15,
    create_date: '2024-01-01T20:24:54.000Z',
  },
  {
    answer_id: 3,
    type: 'stress',
    answer: [
      { seq: 1, score: 2 },
      { seq: 2, score: 2 },
      { seq: 3, score: 2 },
      { seq: 4, score: 2 },
      { seq: 5, score: 2 },
      { seq: 6, score: 2 },
      { seq: 7, score: 2 },
      { seq: 8, score: 2 },
      { seq: 9, score: 2 },
      { seq: 10, score: 4 },
    ],
    sumScore: 22,
    create_date: '2024-10-10T20:24:54.000Z',
  },
  {
    answer_id: 4,
    type: 'stress',
    answer: [
      { seq: 1, score: 4 },
      { seq: 2, score: 4 },
      { seq: 3, score: 4 },
      { seq: 4, score: 4 },
      { seq: 5, score: 4 },
      { seq: 6, score: 4 },
      { seq: 7, score: 4 },
      { seq: 8, score: 4 },
      { seq: 9, score: 4 },
      { seq: 10, score: 4 },
    ],
    sumScore: 40,
    create_date: '2024-10-10T20:24:54.000Z',
  },
];

export const Report1: Story = {
  render: () => (
    <Container>
      <Report
        answer={dummyAnswer[0]}
        date2DigitMonth="01"
        date2DigitDate="01"
        answerTitle={mappedResultType(dummyAnswer[0].sumScore)}
      />
    </Container>
  ),
};

export const Report2: Story = {
  render: () => (
    <Container>
      <Report
        answer={dummyAnswer[1]}
        date2DigitMonth="01"
        date2DigitDate="01"
        answerTitle={mappedResultType(dummyAnswer[1].sumScore)}
      />
    </Container>
  ),
};
export const Report3: Story = {
  render: () => (
    <Container>
      <Report
        answer={dummyAnswer[2]}
        date2DigitMonth="10"
        date2DigitDate="10"
        answerTitle={mappedResultType(dummyAnswer[2].sumScore)}
      />
    </Container>
  ),
};
export const Report4: Story = {
  render: () => (
    <Container>
      <Report
        answer={dummyAnswer[3]}
        date2DigitMonth="10"
        date2DigitDate="10"
        answerTitle={mappedResultType(dummyAnswer[3].sumScore)}
      />
    </Container>
  ),
};

const Container = styled.div`
  width: 400px;
  height: auto;
`;
