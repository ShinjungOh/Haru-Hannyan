import styled from '@emotion/styled';
import { Meta, StoryObj } from '@storybook/react';
import { Timeline } from '@ui/components/diary/Timeline';
import { Emotion, Feeling } from '@lib/types';

const meta: Meta<typeof Timeline> = {
  title: 'Component/Timeline',
  component: Timeline,
};

export default meta;

type Story = StoryObj<typeof Timeline>;

const dummyDiary = [
  {
    diaryId: 1,
    feel: Feeling.화남,
    emotions: [],
    text: '',
    createDate: {
      year: 2024,
      month: 1,
      date: 1,
    },
  },
  {
    diaryId: 2,
    feel: Feeling.나쁨,
    emotions: [],
    text: '다이어리 내용',
    createDate: {
      year: 2024,
      month: 1,
      date: 1,
    },
  },
  {
    diaryId: 3,
    feel: Feeling.보통,
    emotions: [Emotion.뿌듯한, Emotion.행복한, Emotion.기대되는, Emotion.편안한, Emotion.피곤한],
    text: '',
    createDate: {
      year: 2024,
      month: 1,
      date: 1,
    },
  },
  {
    diaryId: 4,
    feel: Feeling.좋음,
    emotions: [Emotion.뿌듯한, Emotion.행복한],
    text: '다이어리 내용',
    createDate: {
      year: 2024,
      month: 1,
      date: 1,
    },
  },
  {
    diaryId: 5,
    feel: Feeling.행복,
    emotions: [
      Emotion.뿌듯한,
      Emotion.행복한,
      Emotion.기대되는,
      Emotion.편안한,
      Emotion.피곤한,
      Emotion.슬픈,
      Emotion.부담되는,
    ],
    text: '다이어리 내용',
    createDate: {
      year: 2024,
      month: 1,
      date: 1,
    },
  },
];

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
