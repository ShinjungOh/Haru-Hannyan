import styled from '@emotion/styled';
import { Meta, StoryObj } from '@storybook/react';
import { Report } from '@ui/components/report/Report';
import { mappedResultType } from '@lib/utils';
import { dummyAnswer } from '@lib/const/storybookDummy';

const meta: Meta<typeof Report> = {
  title: 'Component/Report',
  component: Report,
  args: {
    onClick: (id: number) => {
      alert(`id: ${id}`);
    },
  },
};

export default meta;

type Story = StoryObj<typeof Report>;

export const Report1: Story = {
  render: (args) => (
    <Container>
      <Report
        answer={dummyAnswer[0]}
        date2DigitMonth="01"
        date2DigitDate="01"
        answerTitle={mappedResultType(dummyAnswer[0].sumScore)}
        onClick={args.onClick}
      />
    </Container>
  ),
};

export const Report2: Story = {
  render: (args) => (
    <Container>
      <Report
        answer={dummyAnswer[1]}
        date2DigitMonth="01"
        date2DigitDate="01"
        answerTitle={mappedResultType(dummyAnswer[1].sumScore)}
        onClick={args.onClick}
      />
    </Container>
  ),
};

export const Report3: Story = {
  render: (args) => (
    <Container>
      <Report
        answer={dummyAnswer[2]}
        date2DigitMonth="10"
        date2DigitDate="10"
        answerTitle={mappedResultType(dummyAnswer[2].sumScore)}
        onClick={args.onClick}
      />
    </Container>
  ),
};

export const Report4: Story = {
  render: (args) => (
    <Container>
      <Report
        answer={dummyAnswer[3]}
        date2DigitMonth="10"
        date2DigitDate="10"
        answerTitle={mappedResultType(dummyAnswer[3].sumScore)}
        onClick={args.onClick}
      />
    </Container>
  ),
};

const Container = styled.div`
  width: 400px;
  height: auto;
`;
