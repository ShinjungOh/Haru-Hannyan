import styleTokenCss from '@ui/styles/styleToken.css';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

type DayBoxProps = {
  date: number;
  disabled: boolean;
  onClick?: () => void;
};

export default function DayBox({ date, disabled, onClick }: DayBoxProps) {
  return (
    <Day onClick={onClick}>
      <Date>{date}</Date>
      <Circle disabled={disabled} />
    </Day>
  );
}

const Day = styled.div`
  width: 40px;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: ${styleTokenCss.color.gray3};

  & + & {
    margin-top: 25px;
  }
`;

const Date = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${styleTokenCss.color.gray3};
  font-weight: 600;
  font-size: 10px;
`;

const Circle = styled.div<{ disabled: boolean }>`
  width: 40px;
  height: 40px;
  margin-top: 8px;
  border: 1px dashed ${styleTokenCss.color.gray3};
  border-radius: 50%;
  ${(props) =>
    props.disabled &&
    css`
      background-color: ${styleTokenCss.color.gray4};
      border: 1px solid ${styleTokenCss.color.gray4};
    `}
`;
