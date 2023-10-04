import styled from '@emotion/styled';
import { CALENDAR_TYPE_IMG } from '@lib/const/imageSrc';
import { DateType } from '@lib/types';
import { styleToken } from '@ui/styles';

type DateColumnProps = {
  date: number;
  type: DateType;
  onClick: () => void;
};

export function DateColumn({ date, type, onClick }: DateColumnProps) {
  const imgSrc = CALENDAR_TYPE_IMG[type];

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
  color: ${styleToken.color.gray3};
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
  color: ${styleToken.color.gray3};
  font-weight: 600;
  font-size: 10px;
`;
