import { Meta, StoryObj } from '@storybook/react';
import { Typography } from '@ui/components/common/Typography';
import styled from '@emotion/styled';

const meta: Meta<typeof Typography> = {
  title: 'Component/Typography',
  component: Typography,
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const typography: Story = {
  render: () => (
    <Container>
      <Typography variant="h1">h1 600 32px</Typography>
      <Typography variant="h2">h2 600 28px</Typography>
      <Typography variant="h3">h3 600 24px</Typography>
      <Typography variant="h4">h4 600 20px</Typography>
      <br />
      <Typography variant="subtitle1">subtitle1 500 20px</Typography>
      <Typography variant="subtitle2">subtitle2 500 18px</Typography>
      <Typography variant="subtitle3">subtitle3 500 16px</Typography>
      <Typography variant="subtitle4">subtitle4 500 14px</Typography>
      <br />
      <Typography variant="body1">body1 400 18px</Typography>
      <Typography variant="body2">body2 400 16px</Typography>
      <Typography variant="body3">body3 400 14px</Typography>
      <Typography variant="body4">body4 400 12px</Typography>
    </Container>
  ),
};

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
