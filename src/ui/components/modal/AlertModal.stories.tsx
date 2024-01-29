import styled from '@emotion/styled';
import { styleToken } from '@ui/styles';
import { Meta, StoryObj } from '@storybook/react';
import { AlertModal } from '@ui/components/modal/AlertModal';

const meta: Meta<typeof AlertModal> = {
  title: 'Component/AlertModal',
  component: AlertModal,
};

export default meta;

type Story = StoryObj<typeof AlertModal>;

export const Success: Story = {
  render: () => (
    <Container>
      <AlertModal type="success" title="Alert 모달입니다." />
    </Container>
  ),
};

export const Danger: Story = {
  render: () => (
    <Container>
      <AlertModal type="danger" title="Alert 모달입니다." />
    </Container>
  ),
};

export const Info: Story = {
  render: () => (
    <Container>
      <AlertModal type="info" title="Alert 모달입니다." />
    </Container>
  ),
};

const Container = styled.div`
  position: relative;
  width: 440px;
  height: 600px;
  background-color: ${styleToken.color.gray3}80;
`;
