import styled from '@emotion/styled';
import useDateStore from '@lib/store/useDateStore';
import styleToken from '../../styles/styleToken.css';

export default function WritePostHeader() {
  const [targetDate] = useDateStore((state) => [state.currentDate, state.targetDate]);

  return (
    <Container>
      <SelectDate>
        {targetDate.getFullYear()}년 {targetDate.getMonth() + 1}월
      </SelectDate>
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

const SelectDate = styled.div`
  width: 112px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: ${styleToken.color.gray2};
`;
