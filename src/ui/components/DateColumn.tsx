import styleTokenCss from '@ui/styles/styleToken.css';
import styled from '@emotion/styled';

const calendarImageTypeSrc = {
  today: 'images/icon/calendar/today.svg',
  available: 'images/icon/calendar/available.svg',
  disabled: 'images/icon/calendar/disabled.svg',
  great: 'images/icon/calendar/feeling-cat-great.svg',
  good: 'images/icon/calendar/feeling-cat-good.svg',
  normal: 'images/icon/calendar/feeling-cat-normal.svg',
  bad: 'images/icon/calendar/feeling-cat-bad.svg',
  angry: 'images/icon/calendar/feeling-cat-angry.svg',
};

type DayBoxProps = {
  date: number;
  type: 'today' | 'available' | 'disabled' | 'great' | 'good' | 'normal' | 'bad' | 'angry';
  onClick?: () => void;
};

export default function DateColumn({ date, type, onClick }: DayBoxProps) {
  const imgSrc = calendarImageTypeSrc[type];

  return (
    <Day onClick={onClick}>
      <DateNumber>{date}</DateNumber>
      <img src={imgSrc} alt="달력 아이콘" />
    </Day>
  );
}

const Day = styled.div`
  width: 37px;
  height: 57px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${styleTokenCss.color.gray3};
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }
`;

const DateNumber = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${styleTokenCss.color.gray3};
  font-weight: 600;
  font-size: 10px;
`;
