import styled from '@emotion/styled';
import { useNavigate } from 'react-router';
import useConfirm from '@lib/hooks/useConfirm';
import styleToken from '../../../styles/styleToken.css';
import { dayName } from '../../../../pages/CalendarPage';

type WritePostHeaderProps = {
  year: number;
  month: number;
  date: number;
};

export default function WritePostHeader({ year, month, date }: WritePostHeaderProps) {
  const navigate = useNavigate();
  const confirm = useConfirm();

  const handleNavigateBack = () => {
    console.log('back');
    navigate(-1);
  };

  const getDayOfTargetDate = new Date(year, month - 1, date).getDay();

  const dayOfWeek = dayName[getDayOfTargetDate];

  const handlePageBack = async () => {
    const responseConfirm = await confirm(
      {
        type: 'out',
        title: '감정일기 글쓰기',
        description: '기록한 내용이 저장되지 않습니다.\n그래도 나가시겠습니까?',
      },
      { clickOverlayClose: true },
    );

    if (responseConfirm) {
      handleNavigateBack();
    }
  };

  return (
    <>
      <Container>
        <BackArrow src="/images/icon/back.png" alt="back" onClick={handlePageBack} />
        <SelectedDate>
          {month}월 {date}일 {dayOfWeek}요일
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
