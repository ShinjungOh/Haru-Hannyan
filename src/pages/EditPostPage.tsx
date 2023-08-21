import Body from '@ui/components/layout/Body';
import WritePostHeader from '@ui/components/layout/WritePostHeader';
import styled from '@emotion/styled';
import styleTokenCss from '@ui/styles/styleToken.css';
import { Diary, Emotion, Feeling } from '@lib/types/diary.type';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { emotionImageSrc, FeelingCatTypeSrc } from '@lib/const/ImageSrc';
import { handleAxiosError, http } from '../api/http';

export default function EditPostPage() {
  const [params] = useSearchParams();
  const navigate = useNavigate();

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

  const handleChangeInputDiary = (e: any) => {
    const { value } = e.target;
    setDiary({
      ...diary,
      text: value,
    });
  };

  console.log(diary);

  const putEditDiary = async () => {
    try {
      const response = await http.put<{ diary: Diary }>(`/diary/${diaryId}`, diary);
      console.log(response.msg);
      alert(response.msg);
      navigate(-1);
    } catch (e) {
      const error = handleAxiosError(e);
      alert(error.msg);
    }
  };

  const handleEditDiary = () => {
    putEditDiary();
  };

  useEffect(() => {
    const getDailyDiary = async () => {
      const response = await http.get<{ diary: Diary }>(`/diary/${diaryId}`);
      const isSuccess = response.success;
      if (isSuccess && response.data) {
        const dailyDiary = response.data.diary;
        setDiary(dailyDiary);
      }
    };

    getDailyDiary();
  }, [diaryId]);

  return (
    <>
      <WritePostHeader year={diary.createDate.year} month={diary.createDate.month} date={diary.createDate.date} />
      <Body>
        <Container>
          <FeelingContainer>
            <h4>오늘은 어떤 고양이인가요?</h4>
            <FeelingCatList>
              <>
                {FeelingCatTypeSrc.map((el, index) => {
                  const isSelected = el.feeling === diary.feel;
                  return (
                    <FeelingCatImage
                      key={index}
                      src={el.url}
                      alt={el.feeling}
                      isSelected={isSelected}
                      onClick={() => handleClickDiaryFeeling(el.feeling)}
                    />
                  );
                })}
              </>
            </FeelingCatList>
          </FeelingContainer>
          <EmotionContainer>
            <h4>감정</h4>
            <EmotionList>
              <>
                {emotionImageSrc.map((el, index) => {
                  const isSelected = diary.emotions.includes(el.emotion);
                  return (
                    <EmotionItem key={index} onClick={() => handleClickDiaryEmotion(el.emotion)}>
                      <EmotionHeader isSelected={isSelected}>
                        <img src={el.url} alt={el.emotion} />
                      </EmotionHeader>
                      <EmotionBody>{el.emotion}</EmotionBody>
                    </EmotionItem>
                  );
                })}
              </>
            </EmotionList>
          </EmotionContainer>
          <DiaryContainer>
            <label htmlFor="diary">한줄일기</label>
            <InputText type="text" id="diary" name="diary" value={diary.text} onChange={handleChangeInputDiary} />
          </DiaryContainer>
          <Button type="button" onClick={handleEditDiary}>
            수정완료
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

const FeelingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px 15px 15px 15px;
  width: 100%;
  height: auto;
  border-radius: 15px;
  background-color: white;
  border: 1px solid ${styleTokenCss.color.gray5};
  font-size: 14px;

  h4 {
    font-weight: 600;
    color: ${styleTokenCss.color.gray3};
  }
`;

const FeelingCatList = styled.div`
  margin-top: 13px;
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const FeelingCatImage = styled.img<{ isSelected: boolean }>`
  width: 100%;
  height: 100%;
  opacity: ${(props) => (props.isSelected ? '100%' : '45%')};

  :hover {
    opacity: 100%;
  }
`;

const EmotionContainer = styled.div`
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

  h4 {
    font-weight: 600;
    color: ${styleTokenCss.color.gray3};
  }
`;

const EmotionList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 8px;
  margin-top: 13px;
  width: 100%;
  justify-content: center;
`;

const EmotionItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 100%;
  height: auto;
`;

const EmotionHeader = styled.div<{ isSelected: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background-color: ${styleTokenCss.color.secondary};
  cursor: pointer;
  opacity: ${(props) => (props.isSelected ? '100%' : '45%')};

  img {
    width: 33px;
  }

  :hover {
    opacity: 100%;
  }
`;

const EmotionBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 7px;
  width: 55px;
  font-size: 12px;
  font-weight: 600;
  color: ${styleTokenCss.color.gray3};
`;

const DiaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 15px 15px 15px;
  margin-top: 20px;
  width: 100%;
  height: 120px;
  border-radius: 15px;
  background-color: white;
  border: 1px solid ${styleTokenCss.color.gray5};
  font-size: 14px;

  label {
    padding-bottom: 10px;
    font-weight: 600;
    color: ${styleTokenCss.color.gray3};
  }
`;

const InputText = styled.input`
  width: 100%;
  height: 100%;
  padding: 15px 10px;
  border-radius: 15px;
  border: none;
  color: ${styleTokenCss.color.gray3};
  font-size: 12px;
  outline: none;
  cursor: pointer;
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
