import Header from '@ui/components/layout/Header';
import Body from '@ui/components/layout/Body';
import DateColumn from '@ui/components/DateColumn';
import Menu from '@ui/components/layout/Menu';
import styled from '@emotion/styled';
import styleTokenCss from '@ui/styles/styleToken.css';
import range from '@lib/utils/range';
import useDateStore from '@lib/store/useDateStore';
import { useEffect, useState } from 'react';
import { Diary } from '@lib/types/diary.type';
import { useNavigate } from 'react-router';
import { handleAxiosError, http } from '../api/http';

const dayName = ['일', '월', '화', '수', '목', '금', '토'];

export default function CalendarPage() {
  const navigate = useNavigate();
  const [currentDate, targetDate, getFirstDayOfMonth] = useDateStore((state) => [
    state.currentDate,
    state.targetDate,
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
        alert(error.msg);
      }
    };

    const getCurrentDate = () => {
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth() + 1;
      navigate(`/calendar?year=${year}&month=${month}`);
    };

    if (targetDate !== null) {
      getMonthlyDiary();
    } else {
      getCurrentDate();
    }
  }, [currentDate, navigate, targetDate]);

  console.log(monthlyDiary);

  return (
    <>
      <Header />
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
                return <DateColumn key={date} date={date} type={findElement.feel} />;
              }
              if (isToday) {
                return <DateColumn key={date} date={date} type="today" />;
              }
              if (isDisabled) {
                return <DateColumn key={date} date={date} type="disabled" />;
              }
              return <DateColumn key={date} date={date} type="available" />;
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
