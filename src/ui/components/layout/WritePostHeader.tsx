import styled from '@emotion/styled';
import useDateStore from '@lib/store/useDateStore';
import { useNavigate } from 'react-router';
import styleToken from '../../styles/styleToken.css';

export default function WritePostHeader() {
  const [targetDate] = useDateStore((state) => [state.currentDate, state.targetDate]);

  const navigate = useNavigate();

  const handlePageBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Container>
        <BackArrow onClick={handlePageBack} src="/images/icon/back.png" alt="back" />
        <SelectedDate>
          {targetDate.getFullYear()}년 {targetDate.getMonth() + 1}월
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
  width: 112px;
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
