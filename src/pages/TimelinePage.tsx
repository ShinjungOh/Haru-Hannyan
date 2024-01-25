import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { CalendarHeader } from '@ui/components/calendar';
import { Body } from '@ui/components/layout';
import { Timeline } from '@ui/components/diary';
import { EmptyItem } from '@ui/components/common';
import { Menu } from '@ui/components/menu';
import { useAxiosErrorAlert, useConfirm } from '@lib/hooks';
import { Diary } from '@lib/types';
import { useDateStore, useLoadingStore } from '@lib/store';
import { apiDeleteDiary, apiGetMonthlyDiary } from '../api/diary';
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

  const [setIsLoading, setIsLoadingWithTimeout] = useLoadingStore((state) => [
    state.setIsLoading,
    state.setIsLoadingWithTimeout,
  ]);

  const [diaryList, setDiaryList] = useState<Diary[]>();

  const handlePageToEditDiary = (diaryId: string) => {
    navigate(`/calendar/edit?diaryId=${diaryId}`);
  };

  const handleClickDeleteDiary = async (diaryId: string) => {
    try {
      const responseConfirm = await confirm({
        type: 'delete',
        title: '일기를 삭제하시겠어요?',
        description: '하루의 일기가 사라져요.',
      });
      if (responseConfirm) {
        await apiDeleteDiary(diaryId);
        location.reload();
      }
    } catch (e) {
      await axiosErrorAlert(e);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    const getMonthlyDiary = async () => {
      try {
        if (targetDate !== null) {
          const year = targetDate.getFullYear();
          const month = targetDate.getMonth() + 1;

          const responseGetMonthlyDiary = await apiGetMonthlyDiary(year, month);

          if (responseGetMonthlyDiary.success && responseGetMonthlyDiary.data) {
            setDiaryList(responseGetMonthlyDiary.data.diary);
          }
        }
      } catch (e) {
        await axiosErrorAlert(e);
      } finally {
        setIsLoadingWithTimeout(500);
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
        {diaryList && diaryList?.length > 0 ? (
          diaryList.map((diary, index) => {
            const date2Digit = diary.createDate.date < 10 ? `0${diary.createDate.date}` : diary.createDate.date;
            const getDayOfTargetDate = new Date(
              diary.createDate.year,
              diary.createDate.month - 1,
              diary.createDate.date,
            ).getDay();
            const dayOfWeek = dayName[getDayOfTargetDate];

            return (
              <Timeline
                key={index}
                diary={diary}
                date2Digit={date2Digit}
                dayOfWeek={dayOfWeek}
                onEditDiary={handlePageToEditDiary}
                onDeleteDiary={handleClickDeleteDiary}
              />
            );
          })
        ) : (
          <EmptyItem description="작성한 일기가 없어요." />
        )}
      </Container>
      <Menu />
    </>
  );
}

const Container = styled(Body)`
  overflow-y: auto;
  padding: 4px 20px 14px 20px;
  width: 100%;
`;
