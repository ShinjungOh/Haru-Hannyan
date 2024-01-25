import { Meta, StoryObj } from '@storybook/react';
import { InputBox } from '@ui/components/common/InputBox';
import styled from '@emotion/styled';

const meta: Meta<typeof InputBox> = {
  title: 'Component/InputBox',
  component: InputBox,
};

export default meta;

type Story = StoryObj<typeof InputBox>;

export const Default: Story = {
  render: () => (
    <Container>
      <InputBox type="input" id="input" name="input" placeholder="Input" />
    </Container>
  ),
};

export const Input: Story = {
  render: () => (
    <Container>
      <InputBox type="input" id="input" name="input" placeholder="Input" value="Email@gmail.com">
        Email@gmail.com
      </InputBox>
    </Container>
  ),
};

const Container = styled.div`
  width: 400px;
  height: auto;
`;
