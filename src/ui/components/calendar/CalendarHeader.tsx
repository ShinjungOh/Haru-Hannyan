import styled from '@emotion/styled';
import { styleToken } from '@ui/styles';
import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import { Typography } from '@ui/components/common';
import useDateStore from '@lib/store/useDateStore';

type CalendarHeaderProps = {
  page?: 'calendar' | 'timeline';
};

export function CalendarHeader({ page }: CalendarHeaderProps) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const paramYear = searchParams.get('year');
  const paramMonth = searchParams.get('month');

  const paramParseYear = paramYear ? parseInt(paramYear, 10) : null;
  const paramParseMonth = paramMonth ? parseInt(paramMonth, 10) : null;

  const [currentDate, targetDate, setTargetDate] = useDateStore((state) => [
    state.currentDate,
    state.targetDate,
    state.setTargetDate,
  ]);

  const handleChangeTargetDate = (type: 'prev' | 'next') => {
    if (targetDate !== null) {
      const mappedTypeNumber = type === 'prev' ? -1 : +1;
      targetDate.setMonth(targetDate.getMonth() + mappedTypeNumber);
      const year = targetDate.getFullYear();
      const month = targetDate.getMonth() + 1;
      if (page === 'calendar') {
        navigate(`/calendar?year=${year}&month=${month}`);
      } else if (page === 'timeline') {
        navigate(`/timeline?year=${year}&month=${month}`);
      }
    }
  };

  const handleChangeDateToPrev = () => {
    handleChangeTargetDate('prev');
  };

  const isActiveNext = useMemo(() => {
    if (targetDate === null) {
      return false;
    }
    const targetMonth = `${targetDate.getFullYear()}${targetDate.getMonth()}`;
    const currentMonth = `${currentDate.getFullYear()}${currentDate.getMonth()}`;
    return targetMonth < currentMonth;
  }, [currentDate, targetDate]);

  const handleChangeDateToNext = () => {
    if (isActiveNext) {
      handleChangeTargetDate('next');
    }
  };

  const calendarTargetDateString =
    targetDate !== null
      ? `${targetDate.getFullYear()}년 ${targetDate.getMonth() + 1}월`
      : `${currentDate.getFullYear()}년 ${currentDate.getMonth() + 1}월`;

  useEffect(() => {
    const hasQueryString = paramParseYear && paramParseMonth;

    const setCurrentDateToTargetDate = () => {
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth() + 1;
      setTargetDate(year, month);
    };

    if (hasQueryString) {
      setTargetDate(paramParseYear, paramParseMonth);
    } else {
      setCurrentDateToTargetDate();
    }
  }, [paramParseYear, paramParseMonth, setTargetDate]);

  return (
    <Container>
      <Arrow onClick={handleChangeDateToPrev}>
        <img src="images/icon/arrow-left-active.svg" alt="arrow-left-active" />
      </Arrow>
      <SelectDate>
        <Typography variant="h4">{calendarTargetDateString}</Typography>
      </SelectDate>
      <Arrow onClick={handleChangeDateToNext}>
        <>
          {isActiveNext ? (
            <img src="images/icon/arrow-right-active.svg" alt="arrow-right-active" />
          ) : (
            <img src="images/icon/arrow-right-disabled.svg" alt="arrow-right-disabled" />
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
`;
