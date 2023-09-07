import Body from '@ui/components/layout/Body';
import WritePostHeader from '@ui/components/layout/diary/WritePostHeader';
import styled from '@emotion/styled';
import styleTokenCss from '@ui/styles/styleToken.css';
import { Emotion, Feeling } from '@lib/types/diary.type';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import FeelingContainer from '@ui/components/layout/diary/FeelingContainer';
import EmotionContainer from '@ui/components/layout/diary/EmotionContainer';
import DiaryModal from '@ui/components/layout/modal/DiaryModal';
import useModal from '@lib/hooks/useModal';
import { handleAxiosError, http } from '../api/http';

export type newDiaryType = {
  feel: string | null;
  emotions: Emotion[];
  text: string;
  date: {
    year: number;
    month: number;
    date: number;
  };
};

export default function WritePostPage() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const modal = useModal();

  const todayFeeling = params.get('feeling');
  const year = params.get('year');
  const month = params.get('month');
  const date = params.get('date');

  const parseYear = year ? parseInt(year, 10) : 0;
  const parseMonth = month ? parseInt(month, 10) : 0;
  const parseDate = date ? parseInt(date, 10) : 0;

  const [diary, setDiary] = useState<newDiaryType>({
    feel: todayFeeling || null,
    emotions: [],
    text: '',
    date: {
      year: parseYear,
      month: parseMonth,
      date: parseDate,
    },
  });

  const handleClickDiaryFeeling = (feeling: Feeling) => {
    setDiary({
      ...diary,
      feel: feeling,
    });
  };

  const handleClickDiaryEmotion = (emotion: Emotion) => {
    const isDuplicate = diary.emotions.includes(emotion);

    if (!isDuplicate) {
      setDiary({
        ...diary,
        emotions: [...diary.emotions, emotion],
      });
    } else if (isDuplicate) {
      setDiary({
        ...diary,
        emotions: [...diary.emotions.filter((el) => el !== emotion)],
      });
    }
  };

  const handleDiaryModalOpen = async () => {
    const responseDiaryModal = await modal<{ text: string }>(<DiaryModal diaryText={diary.text} />, {
      clickOverlayClose: true,
    });

    if (responseDiaryModal !== null) {
      setDiary({
        ...diary,
        text: responseDiaryModal.text,
      });
    }
  };

  console.log(diary);

  const postNewDiary = async () => {
    try {
      const response = await http.post('/diary', diary);
      console.log(response.msg);
      alert(response.msg);
      navigate(-1);
    } catch (e) {
      const error = handleAxiosError(e);
      alert(error.msg);
    }
  };

  const isDisabled = !!diary.feel;

  const handlePostNewDiary = () => {
    if (isDisabled) {
      postNewDiary();
    }
  };

  return (
    <>
      <WritePostHeader year={parseYear} month={parseMonth} date={parseDate} />
      <Body>
        <Container>
          <FeelingContainer diary={diary} onClick={handleClickDiaryFeeling} />
          <EmotionContainer diary={diary} onClick={handleClickDiaryEmotion} />
          <DiaryContainer>
            <label htmlFor="diary">한줄일기</label>
            <InputField id="diary" onClick={handleDiaryModalOpen}>
              {diary.text.length > 0 ? diary.text : '내용을 입력해 주세요'}
            </InputField>
          </DiaryContainer>
          <Button type="button" onClick={handlePostNewDiary} disabled={!isDisabled}>
            작성완료
          </Button>
        </Container>
      </Body>
    </>
  );
}

const Container = styled(Body)`
  padding: 15px 35px 35px 35px;
  justify-content: flex-start;
  align-items: center;
  overflow-y: auto;
`;

const DiaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 15px 15px 15px;
  margin-top: 20px;
  width: 100%;
  height: auto;
  border-radius: 15px;
  background-color: white;
  border: 1px solid ${styleTokenCss.color.gray5};
  font-size: 14px;
  z-index: 0;

  label {
    padding-bottom: 10px;
    font-weight: 600;
    color: ${styleTokenCss.color.gray2};
  }
`;

const InputField = styled.div`
  white-space: pre-wrap;
  overflow-y: auto;
  max-height: 200px;
  width: 100%;
  height: auto;
  padding: 16px;
  margin-top: 5px;
  border-radius: 15px;
  border: none;
  color: ${styleTokenCss.color.gray3};
  background-color: ${styleTokenCss.color.gray5};
  font-size: 12px;
  outline: none;
  cursor: pointer;

  ::placeholder {
    color: ${styleTokenCss.color.gray3};
  }
`;

const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 71px;
  min-height: 65px;
  margin-top: 20px;
  border-radius: 15px;
  border: none;
  background-color: ${styleTokenCss.color.secondary};
  color: white;
  font-size: 17px;
  font-weight: 600;
  cursor: pointer;

  :hover {
    background-color: ${styleTokenCss.color.secondaryActive};
  }

  &:disabled {
    background-color: ${styleTokenCss.color.gray5};
    color: ${styleTokenCss.color.white};
    cursor: not-allowed;

    :hover {
      cursor: not-allowed;
      background-color: ${styleTokenCss.color.gray5};
    }
  }
`;
