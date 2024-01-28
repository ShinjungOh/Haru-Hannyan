import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import { CalendarHeader } from '@ui/components/calendar';
import { Body } from '@ui/components/layout';
import { Calendar } from '@ui/components/calendar/Calendar';
import { Menu } from '@ui/components/menu';
import { useAlert, useAxiosErrorAlert } from '@lib/hooks';
import { DateType, Diary } from '@lib/types';
import Lottie from 'react-lottie-player';
import congratsLottie from '@ui/lottie/congratsLottie.json';
import { PATH } from '@lib/const/path';
import { useDateStore, useLoadingStore } from '@lib/store';
import { apiGetMonthlyDiary } from '../api/diary';

export const dayName = ['일', '월', '화', '수', '목', '금', '토'];

export function CalendarPage() {
  const navigate = useNavigate();
  const alert = useAlert();
  const axiosErrorAlert = useAxiosErrorAlert();

  const [params] = useSearchParams();

  const isFirstSign = params.get('isFirst');

  const [currentDate, targetDate, setTargetDate, getFirstDayOfMonth] = useDateStore((state) => [
    state.currentDate,
    state.targetDate,
    state.setTargetDate,
    state.getFirstDayOfMonth,
  ]);

  const [setIsLoading, setIsLoadingWithTimeout] = useLoadingStore((state) => [
    state.setIsLoading,
    state.setIsLoadingWithTimeout,
  ]);

  const [monthlyDiary, setMonthlyDiary] = useState<Diary[]>([]);

  const getTargetMonthLastDay = () => {
    if (targetDate !== null) {
      const lastDateInTargetMonth = new Date(targetDate.getFullYear(), targetDate.getMonth() + 1, 0);
      return lastDateInTargetMonth.getDate();
    }
    const lastDateInTargetMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    return lastDateInTargetMonth.getDate();
  };

  const firstDayOfMonth = targetDate !== null ? getFirstDayOfMonth(targetDate).getDay() : 0;

  const daysInMonth = getTargetMonthLastDay();

  const handleClickDiaryPage = async (type: DateType, date: number) => {
    if (type !== 'disabled' && targetDate !== null) {
      const year = targetDate.getFullYear();
      const month = targetDate.getMonth() + 1;
      const findDiary = monthlyDiary.find(
        (diary) => diary.createDate.year === year && diary.createDate.month === month && diary.createDate.date === date,
      );

      const editDiaryPageURL = `/calendar/edit?diaryId=${findDiary?.diaryId}`;
      const writeDiaryPageURL = `/calendar/write?year=${year}&month=${month}&date=${date}`;
      const navigateURL = findDiary ? editDiaryPageURL : writeDiaryPageURL;

      navigate(navigateURL);
    } else if (type === 'disabled') {
      await alert({
        type: 'info',
        title: '미래의 날짜는\n일기를 기록할 수 없어요.',
      });
    }
  };

  useEffect(() => {
    if (isFirstSign) {
      alert({
        type: 'success',
        title: '하루한냥 가입을 환영합니다!',
      }).then(() => navigate(PATH.CALENDAR, { replace: true }));
    }
  }, []);

  useEffect(() => {
    const getMonthlyDiary = async () => {
      setIsLoading(true);
      try {
        if (targetDate !== null) {
          const year = targetDate.getFullYear();
          const month = targetDate.getMonth() + 1;

          const responseGetMonthlyDiary = await apiGetMonthlyDiary(year, month);

          if (responseGetMonthlyDiary.success && responseGetMonthlyDiary.data) {
            setMonthlyDiary(responseGetMonthlyDiary.data.diary);
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
  }, [currentDate, navigate, setTargetDate, targetDate]);

  return (
    <>
      {isFirstSign && (
        <Lottie loop animationData={congratsLottie} play style={{ position: 'absolute', top: '10%', left: '5%' }} />
      )}
      <CalendarHeader page="calendar" />
      <Body>
        <Calendar
          firstDayOfMonth={firstDayOfMonth}
          daysInMonth={daysInMonth}
          monthlyDiary={monthlyDiary}
          currentDate={currentDate}
          selectedYearAndMonthDate={targetDate}
          onDiaryPage={handleClickDiaryPage}
        />
      </Body>
      <Menu />
    </>
  );
}
