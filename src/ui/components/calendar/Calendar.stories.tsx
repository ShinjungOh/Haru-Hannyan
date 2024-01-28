import styled from '@emotion/styled';
import { styleToken } from '@ui/styles';
import { Meta, StoryObj } from '@storybook/react';
import { Calendar } from '@ui/components/calendar/Calendar';
import { dummyCurrentDate, dummyDiary, dummyPastDate } from '@lib/const/storybookDummy';

const meta: Meta<typeof Calendar> = {
  title: 'Component/Calendar',
  component: Calendar,
};

export default meta;

type Story = StoryObj<typeof Calendar>;

export const Default: Story = {
  render: () => (
    <Container>
      <Calendar
        firstDayOfMonth={1}
        daysInMonth={31}
        monthlyDiary={dummyDiary}
        currentDate={dummyCurrentDate}
        selectedYearAndMonthDate={dummyCurrentDate}
      />
    </Container>
  ),
};

export const Past: Story = {
  render: () => (
    <Container>
      <Calendar
        firstDayOfMonth={1}
        daysInMonth={31}
        monthlyDiary={dummyDiary}
        currentDate={dummyCurrentDate}
        selectedYearAndMonthDate={dummyPastDate}
      />
    </Container>
  ),
};

const Container = styled.div`
  width: 440px;
  height: auto;
  background-color: ${styleToken.color.white};
`;
