import styled from '@emotion/styled';
import { Meta, StoryObj } from '@storybook/react';
import { EmptyItem } from '@ui/components/common/EmptyItem';

const meta: Meta<typeof EmptyItem> = {
  title: 'Component/EmptyItem',
  component: EmptyItem,
};

export default meta;

type Story = StoryObj<typeof EmptyItem>;

export const Default: Story = {
  render: () => (
    <Container>
      <EmptyItem description="작성한 일기가 없어요" />
    </Container>
  ),
};

const Container = styled.div`
  width: 400px;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
