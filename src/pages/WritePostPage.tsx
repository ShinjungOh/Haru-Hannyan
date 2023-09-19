import styled from '@emotion/styled';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Body } from '@ui/components/layout';
import { DiaryModal } from '@ui/components/modal';
import { EmotionContainer, FeelingContainer, WritePostHeader } from '@ui/components/diary';
import { useAlert, useModal } from '@lib/hooks';
import { BaseButton } from '@ui/components/common';
import { Emotion, Feeling } from '@lib/types';
import { styleToken } from '@ui/styles';
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

export function WritePostPage() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const modal = useModal();
  const alert = useAlert();

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
      const responseAlert = await alert({
        type: 'success',
        title: response.msg,
      });
      if (responseAlert) {
        navigate(-1);
      }
    } catch (e) {
      const error = handleAxiosError(e);
      await alert({
        type: 'danger',
        title: error.msg,
      });
    }
  };

  const isDisabled = !diary.feel;
  const buttonTheme = isDisabled ? 'disabled' : 'primary';

  const handlePostNewDiary = () => {
    if (!isDisabled) {
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
            <>
              {diary.text.length > 0 ? (
                <InputField id="diary" onClick={handleDiaryModalOpen}>
                  {diary.text}
                </InputField>
              ) : (
                <EmptyInputField id="diary" onClick={handleDiaryModalOpen}>
                  내용을 입력해 주세요
                </EmptyInputField>
              )}
            </>
          </DiaryContainer>
          <BaseButton
            colorTheme={buttonTheme}
            onClick={handlePostNewDiary}
            disabled={isDisabled}
            style={{ marginTop: '20px', height: '68px', minHeight: '65px' }}
          >
            작성완료
          </BaseButton>
        </Container>
      </Body>
    </>
  );
}

const Container = styled(Body)`
  padding: 14px 34px 34px 34px;
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
  border: 1px solid ${styleToken.color.gray5};
  font-size: 14px;
  z-index: 0;

  label {
    padding-bottom: 10px;
    font-weight: 600;
    color: ${styleToken.color.gray3};
  }
`;

const EmptyInputField = styled.div`
  white-space: pre-wrap;
  overflow-y: auto;
  max-height: 200px;
  width: 100%;
  height: auto;
  padding: 16px;
  margin-top: 5px;
  border-radius: 15px;
  border: none;
  color: ${styleToken.color.gray3};
  background-color: ${styleToken.color.gray5};
  font-size: 12px;
  outline: none;
  cursor: pointer;

  ::placeholder {
    color: ${styleToken.color.gray3};
  }
`;

const InputField = styled.div`
  white-space: pre-wrap;
  overflow-y: auto;
  max-height: 200px;
  width: 100%;
  height: auto;
  padding: 15px 10px;
  margin-top: 5px;
  border-radius: 15px;
  border: none;
  color: ${styleToken.color.gray3};
  font-size: 12px;
  outline: none;
  cursor: pointer;
`;
