import styled from '@emotion/styled';
import { Meta, StoryObj } from '@storybook/react';
import { TextField } from '@ui/components/common/TextField';

const meta: Meta<typeof TextField> = {
  title: 'Component/TextField',
  component: TextField,
};

export default meta;

type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  render: () => (
    <Container>
      <TextField type="input" id="input" name="input" placeholder="Input" />
    </Container>
  ),
};

export const Input: Story = {
  render: () => (
    <Container>
      <TextField type="input" id="input" name="input" placeholder="Input" value="Email@gmail.com" />
    </Container>
  ),
};

const Container = styled.div`
  width: 400px;
  height: auto;
`;
