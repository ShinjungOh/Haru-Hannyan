import { Meta, StoryObj } from '@storybook/react';
import { SignButton } from '@ui/components/common/SignButton';
import { styleToken } from '@ui/styles';
import styled from '@emotion/styled';

const meta: Meta<typeof SignButton> = {
  title: 'Component/SignButton',
  component: SignButton,
};

export default meta;

type Story = StoryObj<typeof SignButton>;

export const Home: Story = {
  render: () => (
    <Container>
      <SignButton text="SignButton" backgroundColor={styleToken.color.secondary} color={styleToken.color.gray2} />
    </Container>
  ),
};

export const Kakao: Story = {
  render: () => (
    <Container>
      <SignButton text="SignButton" backgroundColor={styleToken.color.kakao} color={styleToken.color.gray2} />
    </Container>
  ),
};

export const Sign: Story = {
  render: () => (
    <Container>
      <SignButton text="SignButton" backgroundColor={styleToken.color.secondaryActive} color={styleToken.color.white} />
    </Container>
  ),
};

const Container = styled.div`
  width: 380px;
  height: auto;
`;
