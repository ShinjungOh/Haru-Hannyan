import Header from '@ui/components/layout/Header';
import Body from '@ui/components/layout/Body';
import DateColumn from '@ui/components/DateColumn';
import Menu from '@ui/components/layout/Menu';
import styled from '@emotion/styled';
import styleTokenCss from '@ui/styles/styleToken.css';

const dayName = ['일', '월', '화', '수', '목', '금', '토'];

const range = (end: number) =>
  Array(end)
    .fill(0)
    .map((_, index) => index + 1);

export default function CalendarPage() {
  const getCurrentMonthFirstDay = () => {
    const currentDate = new Date();
    return new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  };

  const getCurrentMonthLastDay = () => {
    const currentDate = new Date();
    const currentMonth = new Date(currentDate);
    currentMonth.setMonth(currentMonth.getMonth() + 1);
    const nextMonth = new Date(currentMonth.getTime() - 1);
    return nextMonth.getDate();
  };

  const firstDayOfMonth = getCurrentMonthFirstDay().getDay();

  const daysInMonth = getCurrentMonthLastDay();

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
            {Array(firstDayOfMonth)
              .fill(0)
              .map((_, index) => (
                <div key={index} />
              ))}
            {range(daysInMonth).map((date) => (
              <DateColumn key={date} date={date} type="available" />
            ))}
            <DateColumn date={1} type="great" />
            <DateColumn date={2} type="good" />
            <DateColumn date={3} type="normal" />
            <DateColumn date={4} type="bad" />
            <DateColumn date={5} type="angry" />
            <DateColumn date={6} type="today" />
            <DateColumn date={7} type="disabled" />
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
