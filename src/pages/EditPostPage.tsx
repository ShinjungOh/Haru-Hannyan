import styled from '@emotion/styled';
import { styleToken } from '@ui/styles';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import { Body } from '@ui/components/layout';
import { EmotionContainer, EmptyInputField, FeelingContainer, InputField, WritePostHeader } from '@ui/components/diary';
import { BaseButton } from '@ui/components/common';
import { DiaryModal } from '@ui/components/modal';
import { useAlert, useAxiosErrorAlert, useModal } from '@lib/hooks';
import { Diary, Emotion, Feeling } from '@lib/types';
import { apiGetDailyDiary, apiPutDiary } from '../api/diary';

export function EditPostPage() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const modal = useModal();
  const alert = useAlert();
  const axiosErrorAlert = useAxiosErrorAlert();

  const diaryId = params.get('diaryId');

  const [diary, setDiary] = useState<Diary>({
    diaryId: 0,
    feel: Feeling.보통,
    emotions: [],
    text: '',
    createDate: {
      year: 0,
      month: 0,
      date: 0,
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

    if (responseDiaryModal) {
      setDiary({
        ...diary,
        text: responseDiaryModal.text,
      });
    }
  };

  const handleEditDiary = async () => {
    try {
      if (!diaryId) {
        await alert({
          type: 'danger',
          title: '선택된 일기가 없어요.',
        });
        return;
      }

      const responsePutDiary = await apiPutDiary(diaryId, diary);

      if (responsePutDiary.success) {
        const responseAlert = await alert({
          type: 'success',
          title: responsePutDiary.msg,
        });

        if (responseAlert) {
          navigate(-1);
        }
      }
    } catch (e) {
      await axiosErrorAlert(e);
    }
  };

  useEffect(() => {
    const getDailyDiary = async () => {
      try {
        if (!diaryId) {
          await alert({
            type: 'danger',
            title: '선택된 일기가 없어요.',
          });
          return;
        }

        const responseGetDiary = await apiGetDailyDiary(diaryId);

        if (responseGetDiary.success && responseGetDiary.data) {
          const dailyDiary = responseGetDiary.data.diary;
          setDiary(dailyDiary);
        }
      } catch (e) {
        await axiosErrorAlert(e);
      }
    };

    getDailyDiary();
  }, [diaryId]);

  return (
    <>
      <WritePostHeader year={diary.createDate.year} month={diary.createDate.month} date={diary.createDate.date} />
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
            colorTheme="primary"
            onClick={handleEditDiary}
            style={{ marginTop: '20px', height: '54px', minHeight: '54px' }}
          >
            수정완료
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
    font-weight: 600;
    color: ${styleToken.color.gray3};
  }
`;
