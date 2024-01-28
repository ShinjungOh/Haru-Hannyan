import styled from '@emotion/styled';
import { styleToken } from '@ui/styles';
import { Typography } from '@ui/components/common';
import { range } from '@lib/utils';
import { DateColumn } from '@ui/components/calendar/DateColumn';
import { DateType, Diary } from '@lib/types';
import { dayName } from '../../../pages';

type CalendarProps = {
  firstDayOfMonth: number;
  daysInMonth: number;
  monthlyDiary: Diary[];
  currentDate: Date;
  selectedYearAndMonthDate: Date | null;
  onDiaryPage: (type: DateType, date: number) => void;
};

export function Calendar({
  firstDayOfMonth,
  daysInMonth,
  monthlyDiary,
  currentDate,
  selectedYearAndMonthDate,
  onDiaryPage,
}: CalendarProps) {
  const isCurrentDateSameAsTarget = () => {
    if (selectedYearAndMonthDate !== null) {
      const year = selectedYearAndMonthDate.getFullYear() === currentDate.getFullYear();
      const month = selectedYearAndMonthDate.getMonth() === currentDate.getMonth();
      return year && month;
    }

    return false;
  };

  return (
    <Container>
      <WeekRow>
        {dayName.map((day) => (
          <Typography variant="body3" key={day}>
            {day}
          </Typography>
        ))}
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
                  onClick={() => onDiaryPage(findElement.feel, date)}
                />
              );
            }
            if (isToday) {
              return <DateColumn key={date} date={date} type="today" onClick={() => onDiaryPage('today', date)} />;
            }
            if (isDisabled) {
              return (
                <DateColumn key={date} date={date} type="disabled" onClick={() => onDiaryPage('disabled', date)} />
              );
            }
            return (
              <DateColumn key={date} date={date} type="available" onClick={() => onDiaryPage('available', date)} />
            );
          })}
        </>
      </WeekRow>
    </Container>
  );
}

const Container = styled.div`
  padding: 14px 8px;
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
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
