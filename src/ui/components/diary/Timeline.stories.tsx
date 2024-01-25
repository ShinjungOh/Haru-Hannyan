import styled from '@emotion/styled';
import { Meta, StoryObj } from '@storybook/react';
import { Timeline } from '@ui/components/diary/Timeline';
import { Emotion, Feeling } from '@lib/types';

const meta: Meta<typeof Timeline> = {
  title: 'Component/Item',
  component: Timeline,
};

export default meta;

type Story = StoryObj<typeof Timeline>;

const dummyDiary = {
  diaryId: 1,
  feel: Feeling.행복,
  emotions: [Emotion.뿌듯한, Emotion.행복한, Emotion.기대되는, Emotion.편안한, Emotion.피곤한],
  text: '다이어리 내용',
  createDate: {
    year: 2024,
    month: 1,
    date: 1,
  },
};

export const Diary: Story = {
  render: () => (
    <Container>
      <Timeline diary={dummyDiary} dayOfWeek="월" date2Digit="01" />
    </Container>
  ),
};

const Container = styled.div`
  width: 440px;
  height: auto;
`;
