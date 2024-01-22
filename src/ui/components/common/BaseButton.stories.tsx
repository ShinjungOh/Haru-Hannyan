import { Meta, StoryObj } from '@storybook/react';
import { BaseButton } from '@ui/components/common/BaseButton';

const meta: Meta<typeof BaseButton> = {
  title: 'Component/BaseButton',
  component: BaseButton,
};

export default meta;

type Story = StoryObj<typeof BaseButton>;

export const Primary: Story = {
  args: {
    colorTheme: 'primary',
    children: 'Button',
  },
};

export const Success: Story = {
  render: () => <BaseButton colorTheme="success">Button</BaseButton>,
};

export const Danger: Story = {
  args: {
    colorTheme: 'danger',
  },
  render: (args) => <BaseButton {...args}>Button</BaseButton>,
};

export const Info: Story = {
  render: () => <BaseButton colorTheme="info">Button</BaseButton>,
};

export const Light: Story = {
  render: () => <BaseButton colorTheme="light">Button</BaseButton>,
};
