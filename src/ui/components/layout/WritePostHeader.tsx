import styled from '@emotion/styled';
import { useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import styleToken from '../../styles/styleToken.css';
import { dayName } from '../../../pages/CalendarPage';

export default function WritePostHeader() {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const handlePageBack = () => {
    navigate(-1);
  };

  const year = params.get('year');
  const month = params.get('month');
  const date = params.get('date');

  const parseYear = year ? parseInt(year, 10) : 0;
  const parseMonth = month ? parseInt(month, 10) : 0;
  const parseDate = date ? parseInt(date, 10) : 0;

  const getDayOfTargetDate = new Date(parseYear, parseMonth - 1, parseDate).getDay();

  const dayOfWeek = dayName[getDayOfTargetDate];

  return (
    <>
      <Container>
        <BackArrow onClick={handlePageBack} src="/images/icon/back.png" alt="back" />
        <SelectedDate>
          {parseMonth}월 {parseDate}일 {dayOfWeek}요일
        </SelectedDate>
      </Container>
    </>
  );
}

const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: ${styleToken.size.headerHeight};
  background-color: ${styleToken.color.background};
  font-weight: 600;
`;

const SelectedDate = styled.div`
  width: 160px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  color: ${styleToken.color.gray2};
`;

const BackArrow = styled.img`
  position: absolute;
  left: 0;
  padding: 21px;
  cursor: pointer;
`;
