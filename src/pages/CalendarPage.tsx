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
        <Week>
          <span>월</span>
          <span>화</span>
          <span>수</span>
          <span>목</span>
          <span>금</span>
          <span>토</span>
          <span>일</span>
        </Week>
        <DayBox date={1} disabled={false} />
        <DayBox date={2} disabled />
      </Container>
      <Menu />
    </>
  );
}

const Container = styled(Body)`
  padding: 15px 35px;
`;

const Week = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  color: ${styleTokenCss.color.gray3};
  font-weight: 600;
  font-size: 13px;
`;
