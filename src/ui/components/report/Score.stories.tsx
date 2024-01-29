import styled from '@emotion/styled';
import { Meta, StoryObj } from '@storybook/react';
import { Score } from '@ui/components/report/Score';

const meta: Meta<typeof Score> = {
  title: 'Component/Score',
  component: Score,
};

export default meta;

type Story = StoryObj<typeof Score>;

export const Default: Story = {
  render: () => (
    <Container>
      <Score />
    </Container>
  ),
};

const Container = styled.div`
  width: 400px;
  height: auto;
`;
