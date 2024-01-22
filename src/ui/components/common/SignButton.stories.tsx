import { Meta, StoryObj } from '@storybook/react';
import { SignButton } from '@ui/components/common/SignButton';
import { styleToken } from '@ui/styles';

const meta: Meta<typeof SignButton> = {
  title: 'Component/SignButton',
  component: SignButton,
};

export default meta;

type Story = StoryObj<typeof SignButton>;

export const Home: Story = {
  render: () => (
    <SignButton text="SignButton" backgroundColor={styleToken.color.secondary} color={styleToken.color.gray2} />
  ),
};

export const Kakao: Story = {
  render: () => (
    <SignButton text="SignButton" backgroundColor={styleToken.color.kakao} color={styleToken.color.gray2} />
  ),
};

export const Sign: Story = {
  render: () => (
    <SignButton text="SignButton" backgroundColor={styleToken.color.secondaryActive} color={styleToken.color.white} />
  ),
};
