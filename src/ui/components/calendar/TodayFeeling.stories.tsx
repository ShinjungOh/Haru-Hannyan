import styled from '@emotion/styled';
import { Meta, StoryObj } from '@storybook/react';
import { TodayFeeling } from '@ui/components/calendar/TodayFeeling';

const meta: Meta<typeof TodayFeeling> = {
  title: 'Component/TodayFeeling',
  component: TodayFeeling,
  args: {
    onClick: (feeling: string) => {
      alert(`${feeling}`);
    },
  },
};

export default meta;

type Story = StoryObj<typeof TodayFeeling>;

export const Default: Story = {
  render: (args) => (
    <Container>
      <TodayFeeling onClick={args.onClick} />
    </Container>
  ),
};

const Container = styled.div`
  position: relative;
  width: 440px;
  height: 600px;
`;
