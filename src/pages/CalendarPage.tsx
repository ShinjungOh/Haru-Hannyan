import styled from '@emotion/styled';
import { styleToken } from '@ui/styles';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { CalendarHeader, DateColumn } from '@ui/components/calendar';
import { Body } from '@ui/components/layout';
import { Menu } from '@ui/components/menu';
import { Typography } from '@ui/components/common';
import { useAlert, useAxiosErrorAlert } from '@lib/hooks';
import { DateType, Diary } from '@lib/types';
import { range } from '@lib/utils';
import useDateStore from '@lib/store/useDateStore';
import { apiGetMonthlyDiary } from '../api/diary';

export const dayName = ['일', '월', '화', '수', '목', '금', '토'];

export function CalendarPage() {
  const navigate = useNavigate();
  const alert = useAlert();
  const axiosErrorAlert = useAxiosErrorAlert();

  const [currentDate, targetDate, setTargetDate, getFirstDayOfMonth] = useDateStore((state) => [
    state.currentDate,
    state.targetDate,
    state.setTargetDate,
    state.getFirstDayOfMonth,
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

  const isCurrentDateSameAsTarget = () => {
    if (targetDate !== null) {
      const year = targetDate.getFullYear() === currentDate.getFullYear();
      const month = targetDate.getMonth() === currentDate.getMonth();
      return year && month;
    }
    return false;
  };

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
    const getMonthlyDiary = async () => {
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
      }
    };

    if (targetDate !== null) {
      getMonthlyDiary();
    }
  }, [currentDate, navigate, setTargetDate, targetDate]);

  return (
    <>
      <CalendarHeader page="calendar" />
      <Container>
        <WeekRow>
          <>
            {dayName.map((day) => (
              <Typography variant="body3" key={day}>
                {day}
              </Typography>
            ))}
          </>
        </WeekRow>
        <WeekRow>
          <>
            {range(firstDayOfMonth).map((day) => (
              <div key={day} />
            ))}
            {range(daysInMonth, 1).map((date) => {
              const findElement = monthlyDiary.find((diary) => diary.createDate.date === date);
              const isToday = isCurrentDateSameAsTarget() && date === currentDate.getDate();
              const isDisabled = isCurrentDateSameAsTarget() && date > currentDate.getDate();

              if (findElement) {
                return (
                  <DateColumn
                    key={date}
                    date={date}
                    type={findElement.feel}
                    onClick={() => handleClickDiaryPage(findElement.feel, date)}
                  />
                );
              }
              if (isToday) {
                return (
                  <DateColumn key={date} date={date} type="today" onClick={() => handleClickDiaryPage('today', date)} />
                );
              }
              if (isDisabled) {
                return (
                  <DateColumn
                    key={date}
                    date={date}
                    type="disabled"
                    onClick={() => handleClickDiaryPage('disabled', date)}
                  />
                );
              }
              return (
                <DateColumn
                  key={date}
                  date={date}
                  type="available"
                  onClick={() => handleClickDiaryPage('available', date)}
                />
              );
            })}
          </>
        </WeekRow>
      </Container>
      <Menu />
    </>
  );
}

const Container = styled(Body)`
  padding: 14px 8px;
  overflow-y: auto;
`;

const WeekRow = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 20px 0;
  justify-items: center;
  align-items: center;
  color: ${styleToken.color.gray3};
  font-weight: 600;
  font-size: 13px;
  margin-bottom: 35px;
`;
