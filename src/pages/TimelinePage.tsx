import Header from '@ui/components/layout/Header';
import Body from '@ui/components/layout/Body';
import Menu from '@ui/components/layout/Menu';
import styled from '@emotion/styled';
import styleTokenCss from '@ui/styles/styleToken.css';
import { useNavigate } from 'react-router';
import useDateStore from '@lib/store/useDateStore';
import { Diary } from '@lib/types/diary.type';
import { useEffect, useState } from 'react';
import { calendarImageTypeSrc } from '@lib/const/ImageSrc';
import { handleAxiosError, http } from '../api/http';
import { dayName } from './CalendarPage';

export default function TimelinePage() {
  const navigate = useNavigate();
  const [currentDate, targetDate, setTargetDate] = useDateStore((state) => [
    state.currentDate,
    state.targetDate,
    state.setTargetDate,
  ]);

  const [diary, setDiary] = useState<Diary[]>();

  const handlePageToEditDiary = (diaryId: number | undefined) => {
    navigate(`/calendar/edit?diaryId=${diaryId}`);
  };

  const handleClickDeleteDiary = async (diaryId: number | undefined) => {
    try {
      const isConfirm = confirm('일기를 삭제하시겠습니까?');
      if (isConfirm) {
        const response = await http.delete(`/diary/${diaryId}`);
        console.log(response);
        location.reload();
      }
    } catch (e) {
      const error = handleAxiosError(e);
      alert(error.msg);
    }
  };

  useEffect(() => {
    const getMonthlyDiary = async () => {
      try {
        if (targetDate !== null) {
          const year = targetDate.getFullYear();
          const month = targetDate.getMonth() + 1;
          const response = await http.get<{ diary: Diary[] }>(`/diary?year=${year}&month=${month}`);
          const diaryData = response.data;
          if (diaryData && diaryData.diary) {
            console.log(diaryData.diary);
            setDiary(diaryData.diary);
          }
        }
      } catch (e) {
        const error = handleAxiosError(e);
        alert(error.msg);
      }
    };

    const setCurrentDateToTargetDate = () => {
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth() + 1;
      setTargetDate(year, month);
    };

    if (targetDate !== null) {
      getMonthlyDiary();
    } else {
      setCurrentDateToTargetDate();
    }
  }, [currentDate, setTargetDate, targetDate]);

  return (
    <>
      <Header />
      <Container>
        {diary &&
          diary.map((el) => {
            const date2Digit = el.createDate.date < 10 ? `0${el.createDate.date}` : el.createDate.date;
            const getDayOfTargetDate = new Date(
              el.createDate.year,
              el.createDate.month - 1,
              el.createDate.date,
            ).getDay();
            const dayOfWeek = dayName[getDayOfTargetDate];
            return (
              <>
                <DiaryContainer onClick={() => handlePageToEditDiary(el.diaryId)}>
                  <FeelingAndDateContainer>
                    <FeelingCat>
                      <img src={calendarImageTypeSrc[el.feel]} alt={el.feel} />
                    </FeelingCat>
                    <DiaryDate>{date2Digit}</DiaryDate>
                    <DayName>{dayOfWeek}요일</DayName>
                  </FeelingAndDateContainer>
                  <EmotionAndTextContainer>
                    <EmotionItem>
                      <>
                        {el.emotions &&
                          el.emotions.map((emotion) => (
                            <EmotionHeader>
                              <img src={`/images/icon/emotion/${emotion}.svg`} alt={emotion} />
                            </EmotionHeader>
                          ))}
                      </>
                    </EmotionItem>
                    <TextContainer>{el.text}</TextContainer>
                  </EmotionAndTextContainer>
                </DiaryContainer>
                <DeleteButton onClick={() => handleClickDeleteDiary(el.diaryId)}>삭제</DeleteButton>
              </>
            );
          })}
      </Container>
      <Menu />
    </>
  );
}

const Container = styled(Body)`
  overflow-y: auto;
  padding-bottom: 15px;
`;

const DiaryContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin: 10px 38px 5px 38px;
  padding: 18px;
  height: 100%;
  background-color: white;
  border-radius: 15px;
  border: 1px solid ${styleTokenCss.color.gray5};
  font-size: 14px;
  cursor: pointer;
`;

const FeelingAndDateContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  min-height: 100px;
`;

const FeelingCat = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  img {
    width: 42px;
    height: 42px;
  }
`;

const DiaryDate = styled.div`
  margin-top: 8px;
  font-size: 20px;
  font-weight: 600;
  color: ${styleTokenCss.color.gray1};
`;

const DayName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 12px;
  height: 24px;
  border-radius: 6px;
  border: none;
  background-color: ${styleTokenCss.color.gray5};
  color: ${styleTokenCss.color.gray1};
  font-size: 12px;
  font-weight: 400;
`;

const EmotionAndTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 250px;
  height: auto;
  min-height: 100px;
`;

const EmotionItem = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-gap: 5px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
`;

const EmotionHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${styleTokenCss.color.secondary};
  cursor: pointer;

  img {
    width: 30px;
  }
`;

const TextContainer = styled.div`
  white-space: pre-wrap;
  overflow-y: auto;
  max-height: 400px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 5px;
  margin-top: 15px;
  font-size: 14px;
  line-height: 1.3;
  color: ${styleTokenCss.color.gray2};
`;

const DeleteButton = styled.button`
  margin: 0 40px 2px 40px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  border: none;
  background-color: unset;
  color: ${styleTokenCss.color.gray2};
  cursor: pointer;
`;
