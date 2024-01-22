import { Meta, StoryObj } from '@storybook/react';
import { InputBox } from '@ui/components/common/InputBox';

const meta: Meta<typeof InputBox> = {
  title: 'Component/InputBox',
  component: InputBox,
};

export default meta;

type Story = StoryObj<typeof InputBox>;

export const Input: Story = {
  render: () => <InputBox type="input" id="input" name="input" placeholder="Input" />,
};
