import styled from '@emotion/styled';
import { Meta, StoryObj } from '@storybook/react';
import { DiaryModal } from '@ui/components/modal/DiaryModal';

const meta: Meta<typeof DiaryModal> = {
  title: 'Component/DiaryModal',
  component: DiaryModal,
};

export default meta;

type Story = StoryObj<typeof DiaryModal>;

export const Default: Story = {
  render: () => (
    <Container>
      <DiaryModal diaryText="" />
    </Container>
  ),
};

export const Input: Story = {
  render: () => (
    <Container>
      <DiaryModal diaryText="다이어리 내용입니다." />
    </Container>
  ),
};

const Container = styled.div`
  width: 360px;
  height: 100%;
`;
