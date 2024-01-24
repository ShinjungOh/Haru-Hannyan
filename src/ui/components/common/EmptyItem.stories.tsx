import { Meta, StoryObj } from '@storybook/react';
import { EmptyItem } from '@ui/components/common/EmptyItem';

const meta: Meta<typeof EmptyItem> = {
  title: 'Component/Item',
  component: EmptyItem,
};

export default meta;

type Story = StoryObj<typeof EmptyItem>;

export const Empty: Story = {
  render: () => <EmptyItem description="작성한 일기가 없어요" />,
};
