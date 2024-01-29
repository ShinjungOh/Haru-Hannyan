import styled from '@emotion/styled';
import { styleToken } from '@ui/styles';
import { Meta, StoryObj } from '@storybook/react';
import { Calendar } from '@ui/components/calendar/Calendar';
import { dummyCurrentDate, dummyDiary, dummyPastDate } from '@lib/const/storybookDummy';
import { DateType } from '@lib/types';

const meta: Meta<typeof Calendar> = {
  title: 'Component/Calendar',
  component: Calendar,
  args: {
    onDiaryPage: (type: DateType, date: number) => {
      alert(`type: ${type}, date: ${date}`);
    },
  },
};

export default meta;

type Story = StoryObj<typeof Calendar>;

export const Default: Story = {
  render: (args) => (
    <Container>
      <Calendar
        firstDayOfMonth={1}
        daysInMonth={31}
        monthlyDiary={dummyDiary}
        currentDate={dummyCurrentDate}
        selectedYearAndMonthDate={dummyCurrentDate}
        onDiaryPage={args.onDiaryPage}
      />
    </Container>
  ),
};

export const Past: Story = {
  render: (args) => (
    <Container>
      <Calendar
        firstDayOfMonth={1}
        daysInMonth={31}
        monthlyDiary={dummyDiary}
        currentDate={dummyCurrentDate}
        selectedYearAndMonthDate={dummyPastDate}
        onDiaryPage={args.onDiaryPage}
      />
    </Container>
  ),
};

const Container = styled.div`
  width: 440px;
  height: auto;
  background-color: ${styleToken.color.white};
`;
