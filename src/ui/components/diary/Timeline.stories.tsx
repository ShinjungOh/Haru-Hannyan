import styled from '@emotion/styled';
import { Meta, StoryObj } from '@storybook/react';
import { Timeline } from '@ui/components/diary/Timeline';
import { dummyDiary } from '@lib/const/storybookDummy';

const meta: Meta<typeof Timeline> = {
  title: 'Component/Timeline',
  component: Timeline,
};

export default meta;

type Story = StoryObj<typeof Timeline>;

export const Diary1: Story = {
  render: () => (
    <Container>
      <Timeline diary={dummyDiary[0]} dayOfWeek="월" date2Digit="01" />
    </Container>
  ),
};

export const Diary2: Story = {
  render: () => (
    <Container>
      <Timeline diary={dummyDiary[1]} dayOfWeek="월" date2Digit="01" />
    </Container>
  ),
};

export const Diary3: Story = {
  render: () => (
    <Container>
      <Timeline diary={dummyDiary[2]} dayOfWeek="월" date2Digit="01" />
    </Container>
  ),
};

export const Diary4: Story = {
  render: () => (
    <Container>
      <Timeline diary={dummyDiary[3]} dayOfWeek="월" date2Digit="01" />
    </Container>
  ),
};

export const Diary5: Story = {
  render: () => (
    <Container>
      <Timeline diary={dummyDiary[4]} dayOfWeek="월" date2Digit="01" />
    </Container>
  ),
};

const Container = styled.div`
  width: 400px;
  height: auto;
`;
