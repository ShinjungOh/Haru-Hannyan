import styled from '@emotion/styled';
import { Meta, StoryObj } from '@storybook/react';
import { TextField } from '@ui/components/common/TextField';
import { useArgs } from '@storybook/preview-api';
import { ChangeEvent } from 'react';

const meta: Meta<typeof TextField> = {
  title: 'Component/TextField',
  component: TextField,
};

export default meta;

type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  render: function Render() {
    const [{ value }, updateArgs] = useArgs();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      updateArgs({
        value: e.target.value,
      });
    };

    return (
      <Container>
        <TextField type="input" id="input" name="input" placeholder="Input" value={value} onChange={handleChange} />
      </Container>
    );
  },
};

const Container = styled.div`
  width: 400px;
  height: auto;
`;
