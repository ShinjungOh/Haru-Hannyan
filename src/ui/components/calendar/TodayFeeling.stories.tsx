import { Meta, StoryObj } from '@storybook/react';
import { TodayFeeling } from '@ui/components/calendar/TodayFeeling';

const meta: Meta<typeof TodayFeeling> = {
  title: 'Component/Calendar',
  component: TodayFeeling,
};

export default meta;

type Story = StoryObj<typeof TodayFeeling>;

export const TodayFeelingCats: Story = {
  render: () => <TodayFeeling />,
};
