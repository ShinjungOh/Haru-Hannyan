import styled from '@emotion/styled';
import { styleToken } from '@ui/styles';
import { useNavigate } from 'react-router';
import { Typography } from '@ui/components/common';
import { useConfirm } from '@lib/hooks';
import { dayName } from '../../../pages';

type WritePostHeaderProps = {
  year: number;
  month: number;
  date: number;
  isEdit: boolean;
};

export function WritePostHeader({ year, month, date, isEdit }: WritePostHeaderProps) {
  const navigate = useNavigate();
  const confirm = useConfirm();

  const handleNavigateBack = () => {
    navigate(-1);
  };

  const getDayOfTargetDate = new Date(year, month - 1, date).getDay();

  const dayOfWeek = dayName[getDayOfTargetDate];

  const handlePageBack = async () => {
    if (isEdit) {
      const responseConfirm = await confirm(
        {
          type: 'out',
          title: '감정일기 글쓰기',
          description: '기록한 내용이 저장되지 않아요.\n그래도 나가시겠어요?',
        },
        { clickOverlayClose: true },
      );

      if (responseConfirm) {
        handleNavigateBack();
      }
    } else {
      handleNavigateBack();
    }
  };

  return (
    <>
      <Container>
        <BackArrow src="/images/icon/back.svg" alt="back" onClick={handlePageBack} />
        <SelectedDate>
          <Typography variant="h4">
            {month}월 {date}일 {dayOfWeek}요일
          </Typography>
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
`;

const SelectedDate = styled.div`
  width: 160px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const BackArrow = styled.img`
  position: absolute;
  left: 0;
  width: 60px;
  height: 60px;
  padding: 0 22px;
  cursor: pointer;
`;
