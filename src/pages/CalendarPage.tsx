import Header from '@ui/components/layout/Header';
import Body from '@ui/components/layout/Body';
import DateColumn from '@ui/components/DateColumn';
import Menu from '@ui/components/layout/Menu';
import styled from '@emotion/styled';
import styleTokenCss from '@ui/styles/styleToken.css';
import range from '@lib/utils/range';
import useDateStore from '@lib/store/useDateStore';

const dayName = ['일', '월', '화', '수', '목', '금', '토'];
const serverData = [
  {
    year: 2023,
    month: 8,
    date: 1,
    feel: 'great',
  },
  {
    year: 2023,
    month: 8,
    date: 3,
    feel: 'good',
  },
] as const;

export default function CalendarPage() {
  const [currentDate, targetDate, getFirstDayOfMonth] = useDateStore((state) => [
    state.currentDate,
    state.targetDate,
    state.getFirstDayOfMonth,
  ]);

  const getTargetMonthLastDay = () => {
    const lastDateInTargetMonth = new Date(targetDate.getFullYear(), targetDate.getMonth() + 1, 0);
    return lastDateInTargetMonth.getDate();
  };

  const firstDayOfMonth = getFirstDayOfMonth(targetDate).getDay();

  const daysInMonth = getTargetMonthLastDay();

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
              const findElement = serverData.find((el) => el.date === date);
              const isToday = date === currentDate.getDate();
              const isDisabled = date > currentDate.getDate();
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
