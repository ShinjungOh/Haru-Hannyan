import styled from '@emotion/styled';
import { styleToken } from '@ui/styles';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Body } from '@ui/components/layout';
import { EmotionContainer, EmptyInputField, FeelingContainer, InputField, WritePostHeader } from '@ui/components/diary';
import { DiaryModal } from '@ui/components/modal';
import { BaseButton } from '@ui/components/common';
import { useAlert, useAxiosErrorAlert, useModal } from '@lib/hooks';
import { Emotion, Feeling, NewDiary } from '@lib/types';
import { apiPostDiary } from '../api/diary';

export function WritePostPage() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const modal = useModal();
  const alert = useAlert();
  const axiosErrorAlert = useAxiosErrorAlert();

  const todayFeeling = params.get('feeling');
  const year = params.get('year');
  const month = params.get('month');
  const date = params.get('date');

  const parseYear = year ? parseInt(year, 10) : 0;
  const parseMonth = month ? parseInt(month, 10) : 0;
  const parseDate = date ? parseInt(date, 10) : 0;

  const [diary, setDiary] = useState<NewDiary>({
    feel: todayFeeling || null,
    emotions: [],
    text: '',
    date: {
      year: parseYear,
      month: parseMonth,
      date: parseDate,
    },
  });

  const isEdit = true;

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

    if (responseDiaryModal) {
      setDiary({
        ...diary,
        text: responseDiaryModal.text,
      });
    }
  };

  const isDisabled = !diary.feel;
  const buttonTheme = isDisabled ? 'disabled' : 'primary';

  const handlePostNewDiary = async () => {
    if (!isDisabled) {
      try {
        const responsePostDiary = await apiPostDiary(diary);

        if (responsePostDiary.success) {
          const responseAlert = await alert({
            type: 'success',
            title: responsePostDiary.msg,
          });

          if (responseAlert) {
            navigate(-1);
          }
        }
      } catch (e) {
        await axiosErrorAlert(e);
      }
    }
  };

  return (
    <>
      <WritePostHeader year={parseYear} month={parseMonth} date={parseDate} isEdit={isEdit} />
      <Body>
        <Container>
          <FeelingContainer diary={diary} onClick={handleClickDiaryFeeling} />
          <EmotionContainer diary={diary} onClick={handleClickDiaryEmotion} />
          <DiaryContainer>
            <label htmlFor="diary">한줄일기</label>
            <>
              {diary.text.length > 0 ? (
                <InputField id="write_diary" onClick={handleDiaryModalOpen}>
                  {diary.text}
                </InputField>
              ) : (
                <EmptyInputField id="empty_diary" onClick={handleDiaryModalOpen}>
                  내용을 입력해 주세요
                </EmptyInputField>
              )}
            </>
          </DiaryContainer>
          <BaseButton
            name="submit_diary"
            colorTheme={buttonTheme}
            onClick={handlePostNewDiary}
            disabled={isDisabled}
            style={{ marginTop: '20px', height: '54px', minHeight: '54px' }}
          >
            작성완료
          </BaseButton>
        </Container>
      </Body>
    </>
  );
}

const Container = styled(Body)`
  padding: 8px 20px 30px 20px;
  justify-content: flex-start;
  align-items: center;
  overflow-y: auto;
`;

const DiaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px 12px 16px 12px;
  margin-top: 20px;
  width: 100%;
  height: auto;
  border-radius: 15px;
  background-color: white;
  border: 1px solid ${styleToken.color.gray5};
  font-size: 14px;

  label {
    font-weight: 500;
    color: ${styleToken.color.gray3};
  }
`;
