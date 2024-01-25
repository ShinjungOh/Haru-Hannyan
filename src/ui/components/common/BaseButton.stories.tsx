import { Meta, StoryObj } from '@storybook/react';
import { BaseButton } from '@ui/components/common/BaseButton';
import styled from '@emotion/styled';

const meta: Meta<typeof BaseButton> = {
  title: 'Component/BaseButton',
  component: BaseButton,
};

export default meta;

type Story = StoryObj<typeof BaseButton>;

export const Primary: Story = {
  render: () => (
    <Container>
      <BaseButton colorTheme="primary">Button</BaseButton>
    </Container>
  ),
};

export const Success: Story = {
  render: () => (
    <Container>
      <BaseButton colorTheme="success">Button</BaseButton>
    </Container>
  ),
};

export const Danger: Story = {
  render: () => (
    <Container>
      <BaseButton colorTheme="danger">Button</BaseButton>
    </Container>
  ),
};

export const Info: Story = {
  render: () => (
    <Container>
      <BaseButton colorTheme="info">Button</BaseButton>
    </Container>
  ),
};

export const Light: Story = {
  render: () => (
    <Container>
      <BaseButton colorTheme="light">Button</BaseButton>
    </Container>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Container>
      <BaseButton colorTheme="disabled">Button</BaseButton>
    </Container>
  ),
};

const Container = styled.div`
  width: 380px;
  height: auto;
`;
