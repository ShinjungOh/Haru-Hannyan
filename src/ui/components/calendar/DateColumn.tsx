import styleTokenCss from '@ui/styles/styleToken.css';
import styled from '@emotion/styled';
import { DateType } from '@lib/types/diary.type';
import { calendarImageTypeSrc } from '@lib/const/imageSrc';

type DateColumnProps = {
  date: number;
  type: DateType;
  onClick: () => void;
};

export function DateColumn({ date, type, onClick }: DateColumnProps) {
  const imgSrc = calendarImageTypeSrc[type];

  return (
    <Day type={type} onClick={onClick}>
      <DateNumber>{date}</DateNumber>
      <img src={imgSrc} alt="달력 아이콘" />
    </Day>
  );
}

const Day = styled.div<{ type: DateType }>`
  width: 37px;
  height: 57px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${styleTokenCss.color.gray3};
  cursor: ${(props) => (props.type === 'disabled' ? 'not-allowed' : 'pointer')};

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
