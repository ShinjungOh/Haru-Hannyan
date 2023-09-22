import { Menu } from '@ui/components/menu';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router';
import useDateStore from '@lib/store/useDateStore';
import { useEffect, useState } from 'react';
import { calendarImageTypeSrc } from '@lib/const/imageSrc';
import { Body } from '@ui/components/layout';
import { CalendarHeader } from '@ui/components/calendar';
import { useAxiosErrorAlert, useConfirm } from '@lib/hooks';
import { Diary } from '@lib/types';
import { styleToken } from '@ui/styles';
import { Typography } from '@ui/components/common';
import { TimelineEmotionItem } from '@ui/components/diary';
import { http } from '../api/http';
import { dayName } from './CalendarPage';

export function TimelinePage() {
  const navigate = useNavigate();
  const confirm = useConfirm();
  const axiosErrorAlert = useAxiosErrorAlert();

  const [currentDate, targetDate, setTargetDate] = useDateStore((state) => [
    state.currentDate,
    state.targetDate,
    state.setTargetDate,
  ]);

  const [diary, setDiary] = useState<Diary[]>();

  const handlePageToEditDiary = (diaryId: number | undefined) => {
    navigate(`/calendar/edit?diaryId=${diaryId}`);
  };

  const handleClickDeleteDiary = async (diaryId: number | undefined) => {
    try {
      const responseConfirm = await confirm({
        type: 'delete',
        title: '일기를 삭제하시겠습니까?',
        description: '하루의 일기가 사라집니다.',
      });
      if (responseConfirm) {
        const response = await http.delete(`/diary/${diaryId}`);
        console.log(response);
        location.reload();
      }
    } catch (e) {
      await axiosErrorAlert(e);
    }
  };

  useEffect(() => {
    const getMonthlyDiary = async () => {
      try {
        if (targetDate !== null) {
          const year = targetDate.getFullYear();
          const month = targetDate.getMonth() + 1;
          const response = await http.get<{ diary: Diary[] }>(`/diary?year=${year}&month=${month}`);
          const diaryData = response.data;
          if (diaryData && diaryData.diary) {
            console.log(diaryData.diary);
            setDiary(diaryData.diary);
          }
        }
      } catch (e) {
        await axiosErrorAlert(e);
      }
    };

    if (targetDate !== null) {
      getMonthlyDiary();
    }
  }, [currentDate, setTargetDate, targetDate]);

  return (
    <>
      <CalendarHeader page="timeline" />
      <Container>
        {diary && diary?.length > 0 ? (
          diary.map((el, index) => {
            const date2Digit = el.createDate.date < 10 ? `0${el.createDate.date}` : el.createDate.date;
            const getDayOfTargetDate = new Date(
              el.createDate.year,
              el.createDate.month - 1,
              el.createDate.date,
            ).getDay();
            const dayOfWeek = dayName[getDayOfTargetDate];
            return (
              <div key={index}>
                <DiaryContainer onClick={() => handlePageToEditDiary(el.diaryId)}>
                  <FeelingAndDateContainer>
                    <FeelingCat>
                      <img src={calendarImageTypeSrc[el.feel]} alt={el.feel} />
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
                    <TimelineEmotionItem emotions={el.emotions} />
                    <TextContainer>{el.text}</TextContainer>
                  </EmotionAndTextContainer>
                </DiaryContainer>
                <DeleteButton onClick={() => handleClickDeleteDiary(el.diaryId)}>삭제</DeleteButton>
              </div>
            );
          })
        ) : (
          <EmptyContainer>
            <Typography variant="subtitle3" color={styleToken.color.gray3} fontWeight={400}>
              작성한 일기가 없어요
            </Typography>
          </EmptyContainer>
        )}
      </Container>
      <Menu />
    </>
  );
}

const Container = styled(Body)`
  overflow-y: auto;
  padding: 5px 34px 15px 34px;
  width: 100%;
`;

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
  overflow-y: auto;
  max-height: 400px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 5px;
  margin-top: 14px;
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

const EmptyContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 18px;
  height: 100px;
  background-color: white;
  border-radius: 15px;
  border: 1px solid ${styleToken.color.gray5};
  font-size: 14px;
  cursor: pointer;
`;
