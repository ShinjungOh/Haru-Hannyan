import styled from '@emotion/styled';
import { Meta, StoryObj } from '@storybook/react';
import { TodayFeeling } from '@ui/components/calendar/TodayFeeling';

const meta: Meta<typeof TodayFeeling> = {
  title: 'Component/TodayFeeling',
  component: TodayFeeling,
};

export default meta;

type Story = StoryObj<typeof TodayFeeling>;

export const Default: Story = {
  render: () => (
    <Container>
      <TodayFeeling />
    </Container>
  ),
};

const Container = styled.div`
  position: relative;
  width: 440px;
  height: 600px;
`;
