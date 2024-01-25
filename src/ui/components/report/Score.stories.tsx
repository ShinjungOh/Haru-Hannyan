import styled from '@emotion/styled';
import { Meta, StoryObj } from '@storybook/react';
import { Emotion, Feeling } from '@lib/types';
import { Score } from '@ui/components/report/Score';

const meta: Meta<typeof Score> = {
  title: 'Component/Report',
  component: Score,
};

export default meta;

type Story = StoryObj<typeof Score>;

const dummyDiary = [
  {
    diaryId: 1,
    feel: Feeling.행복,
    emotions: [Emotion.뿌듯한, Emotion.행복한, Emotion.기대되는, Emotion.편안한, Emotion.피곤한],
    text: '다이어리 내용',
    createDate: {
      year: 2024,
      month: 1,
      date: 1,
    },
  },
];

export const ResultScore: Story = {
  render: () => (
    <Container>
      <Score diaryList={dummyDiary} />
    </Container>
  ),
};

const Container = styled.div`
  width: 400px;
  height: auto;
`;
