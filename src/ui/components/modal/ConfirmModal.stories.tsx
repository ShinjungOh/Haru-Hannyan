import styled from '@emotion/styled';
import { Meta, StoryObj } from '@storybook/react';
import { ConfirmModal } from '@ui/components/modal/ConfirmModal';

const meta: Meta<typeof ConfirmModal> = {
  title: 'Component/ConfirmModal',
  component: ConfirmModal,
};

export default meta;

type Story = StoryObj<typeof ConfirmModal>;

export const Out: Story = {
  render: () => (
    <Container>
      <ConfirmModal type="out" title="내용을 확인하셨나요?" description="Confirm 모달입니다." />
    </Container>
  ),
};

export const Success: Story = {
  render: () => (
    <Container>
      <ConfirmModal type="success" title="내용을 확인하셨나요?" description="Confirm 모달입니다." />
    </Container>
  ),
};

export const Delete: Story = {
  render: () => (
    <Container>
      <ConfirmModal type="delete" title="내용을 확인하셨나요?" description="Confirm 모달입니다." />
    </Container>
  ),
};

const Container = styled.div`
  width: 440px;
  height: auto;
`;
