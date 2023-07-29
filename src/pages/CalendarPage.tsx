import Header from '@ui/components/layout/Header';
import Body from '@ui/components/layout/Body';
import DayBox from '@ui/components/DayBox';
import Menu from '@ui/components/layout/Menu';
import styled from '@emotion/styled';
import styleTokenCss from '@ui/styles/styleToken.css';

export default function CalendarPage() {
  return (
    <>
      <Header />
      <Container>
        <WeekRow>
          <span>월</span>
          <span>화</span>
          <span>수</span>
          <span>목</span>
          <span>금</span>
          <span>토</span>
          <span>일</span>
        </WeekRow>
        <WeekRow>
          {Array(31)
            .fill(0)
            .map((_, index) => (
              <DayBox date={index + 1} calendarType="available" />
            ))}
          <DayBox date={1} calendarType="available" />
          <DayBox date={2} calendarType="good" />
          <DayBox date={3} calendarType="great" />
          <DayBox date={4} calendarType="angry" />
          <DayBox date={5} calendarType="bad" />
          <DayBox date={6} calendarType="normal" />
          <DayBox date={7} calendarType="today" />
          <DayBox date={8} calendarType="disabled" />
        </WeekRow>
      </Container>
      <Menu />
    </>
  );
}

const Container = styled(Body)`
  padding: 15px 6px;
`;

const WeekRow = styled.div`
  //border: 1px solid salmon;
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
