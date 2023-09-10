import CalendarHeader from '@ui/components/calendar/CalendarHeader';
import Body from '@ui/components/layout/Body';
import DateColumn from '@ui/components/calendar/DateColumn';
import Menu from '@ui/components/MenuBar/Menu';
import styled from '@emotion/styled';
import styleTokenCss from '@ui/styles/styleToken.css';
import range from '@lib/utils/range';
import useDateStore from '@lib/store/useDateStore';
import { useEffect, useState } from 'react';
import { DateType, Diary } from '@lib/types/diary.type';
import { useNavigate } from 'react-router';
import useAlert from '@lib/hooks/useAlert';
import { handleAxiosError, http } from '../api/http';

export const dayName = ['일', '월', '화', '수', '목', '금', '토'];

export default function CalendarPage() {
  const navigate = useNavigate();
  const alert = useAlert();

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

  const isTodayWithoutDate = () => {
    if (targetDate !== null) {
      const year = targetDate.getFullYear() === currentDate.getFullYear();
      const month = targetDate.getMonth() === currentDate.getMonth();
      return year && month;
    }
    return false;
  };

  const isDisabledWithoutDate = () => {
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
        (el) => el.createDate.year === year && el.createDate.month === month && el.createDate.date === date,
      );
      if (!findDiary) {
        navigate(`/calendar/write?year=${year}&month=${month}&date=${date}`);
      } else if (findDiary) {
        navigate(`/calendar/edit?diaryId=${findDiary.diaryId}`);
      }
    } else if (type === 'disabled') {
      await alert({
        type: 'information',
        title: '미래의 날짜는\n 일기를 기록할 수 없어요.',
      });
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
          if (diaryData) {
            setMonthlyDiary(diaryData.diary);
          }
        }
      } catch (e) {
        const error = handleAxiosError(e);
        await alert({
          type: 'negative',
          title: error.msg,
        });
      }
    };

    const setCurrentDateToTargetDate = () => {
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth() + 1;
      setTargetDate(year, month);
    };

    if (targetDate !== null) {
      getMonthlyDiary();
    } else {
      setCurrentDateToTargetDate();
    }
  }, [currentDate, navigate, setTargetDate, targetDate]);

  return (
    <>
      <CalendarHeader page="calendar" />
      <Container>
        <WeekRow>
          <>
            {dayName.map((day) => (
              <span key={day}>{day}</span>
            ))}
          </>
        </WeekRow>
        <WeekRow>
          <>
            {range(firstDayOfMonth).map((day) => (
              <div key={day} />
            ))}
            {range(daysInMonth, 1).map((date) => {
              const findElement = monthlyDiary.find((el) => el.createDate.date === date);
              const isToday = isTodayWithoutDate() && date === currentDate.getDate();
              const isDisabled = isDisabledWithoutDate() && date > currentDate.getDate();
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
  padding: 15px 6px;
  overflow-y: auto;
`;

const WeekRow = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 20px 0;
  justify-items: center;
  align-items: center;
  color: ${styleTokenCss.color.gray3};
  font-weight: 600;
  font-size: 13px;

  span {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 35px;
  }
`;
