import styled from '@emotion/styled';
import { styleToken } from '@ui/styles';
import { TimelineEmotionItem } from '@ui/components/diary/TimelineEmotionItem';
import { Typography } from '@ui/components/common';
import { CALENDAR_TYPE_IMG } from '@lib/const/imageSrc';
import { Diary } from '@lib/types';

type TimelineProps = {
  diary: Diary;
  dayOfWeek: string;
  date2Digit: string | number;
  onEditDiary: (diaryId: string) => void;
  onDeleteDiary: (diaryId: string) => void;
};

export function Timeline({ diary, dayOfWeek, date2Digit, onEditDiary, onDeleteDiary }: TimelineProps) {
  return (
    <>
      <DiaryContainer onClick={() => onEditDiary(String(diary.diaryId))}>
        <FeelingAndDateContainer>
          <FeelingCat>
            <img src={CALENDAR_TYPE_IMG[diary.feel]} alt={diary.feel} />
          </FeelingCat>
          <DiaryDate>
            <Typography variant="h4" color={styleToken.color.gray1}>
              {date2Digit}
            </Typography>
          </DiaryDate>
          <DayName>
            <Typography variant="body4" fontWeight={400}>
              {dayOfWeek}요일
            </Typography>
          </DayName>
        </FeelingAndDateContainer>
        <EmotionAndTextContainer>
          <TimelineEmotionItem emotions={diary.emotions} />
          <TextContainer>{diary.text}</TextContainer>
        </EmotionAndTextContainer>
      </DiaryContainer>
      <DeleteButton name="delete_diary" onClick={() => onDeleteDiary(String(diary.diaryId))}>
        삭제
      </DeleteButton>
    </>
  );
}

const DiaryContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 18px;
  height: auto;
  background-color: white;
  border-radius: 15px;
  border: 1px solid ${styleToken.color.gray5};
  font-size: 14px;
  cursor: pointer;
`;

const FeelingAndDateContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  min-height: 100px;
`;

const FeelingCat = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  img {
    width: 42px;
    height: 42px;
  }
`;

const DiaryDate = styled.div`
  margin-top: 4px;
`;

const DayName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 12px;
  height: 24px;
  border-radius: 6px;
  border: none;
  background-color: ${styleToken.color.gray5};
`;

const EmotionAndTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: calc(100% - 60px);
  height: auto;
  min-height: 100px;
  padding-left: 12px;
`;

const TextContainer = styled.div`
  white-space: pre-wrap;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 5px;
  font-size: 14px;
  line-height: 1.3;
  color: ${styleToken.color.gray2};
`;

const DeleteButton = styled.button`
  width: 100%;
  margin: 2px 0 4px 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  border: none;
  background-color: unset;
  color: ${styleToken.color.gray2};
  cursor: pointer;
`;
