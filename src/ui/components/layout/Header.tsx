import styled from '@emotion/styled';
import { useState } from 'react';
import styleToken from '../../styles/styleToken.css';

export default function Header() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleChangeDateToPrev = () => {
    const prevDate = new Date(currentDate);
    prevDate.setMonth(prevDate.getMonth() - 1);
    setCurrentDate(prevDate);
  };

  const handleChangeDateToNext = () => {
    const nextDate = new Date(currentDate);
    nextDate.setMonth(nextDate.getMonth() + 1);
    setCurrentDate(nextDate);
  };

  return (
    <Container>
      <ArrowLeft onClick={handleChangeDateToPrev}>﹤</ArrowLeft>
      <SelectDate>
        {currentDate.getFullYear()}년 {currentDate.getMonth() + 1}월
      </SelectDate>
      <ArrowRight onClick={handleChangeDateToNext}>﹥</ArrowRight>
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

const ArrowLeft = styled.div`
  padding: 0 12px;
  color: ${styleToken.color.primary};
  cursor: pointer;
  border: none;
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

const ArrowRight = styled.div`
  padding: 0 12px;
  color: ${styleToken.color.gray4};
  cursor: pointer;
`;
