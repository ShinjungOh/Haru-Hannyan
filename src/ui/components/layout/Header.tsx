import styled from '@emotion/styled';
import { useMemo, useState } from 'react';
import styleToken from '../../styles/styleToken.css';

const currentDate = new Date();

export default function Header() {
  const [targetDate, setTargetDate] = useState(new Date());

  const handleChangeDateToPrev = () => {
    const prevDate = new Date(targetDate);
    prevDate.setMonth(prevDate.getMonth() - 1);
    setTargetDate(prevDate);
  };

  const isActiveNext = useMemo(() => {
    const targetMonth = `${targetDate.getFullYear()}${targetDate.getMonth()}`;
    const currentMonth = `${currentDate.getFullYear()}${currentDate.getMonth()}`;
    return targetMonth < currentMonth;
  }, [targetDate]);

  const handleChangeDateToNext = () => {
    if (isActiveNext) {
      const nextDate = new Date(targetDate);
      nextDate.setMonth(nextDate.getMonth() + 1);
      setTargetDate(nextDate);
    }
  };

  return (
    <Container>
      <Arrow onClick={handleChangeDateToPrev}>
        <img src="images/icon/arrow-left.svg" alt="arrow-left" />
      </Arrow>
      <SelectDate>
        {targetDate.getFullYear()}년 {targetDate.getMonth() + 1}월
      </SelectDate>
      <Arrow onClick={handleChangeDateToNext}>
        <>
          {isActiveNext ? (
            <img src="images/icon/arrow-right-active.svg" alt="arrow-left" />
          ) : (
            <img src="images/icon/arrow-right.svg" alt="arrow-left" />
          )}
        </>
      </Arrow>
    </Container>
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

const Arrow = styled.button`
  padding: 0 12px;
  color: ${styleToken.color.primary};
  border: none;
  background-color: unset;
  cursor: pointer;

  img {
    width: 20px;
    height: 20px;
  }
`;

const SelectDate = styled.div`
  width: 112px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: ${styleToken.color.gray2};
`;
