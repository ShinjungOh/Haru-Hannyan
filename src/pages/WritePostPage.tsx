import Body from '@ui/components/layout/Body';
import WritePostHeader from '@ui/components/layout/WritePostHeader';
import styled from '@emotion/styled';
import styleTokenCss from '@ui/styles/styleToken.css';
import { Emotion, Feeling } from '@lib/types/diary.type';
import InputBox from '@ui/components/InputBox';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { handleAxiosError, http } from '../api/http';

export const FeelingCatTypeSrc = [
  {
    feeling: Feeling.행복,
    url: '/images/icon/calendar/feeling-cat-great.svg',
  },
  {
    feeling: Feeling.좋음,
    url: '/images/icon/calendar/feeling-cat-good.svg',
  },
  {
    feeling: Feeling.보통,
    url: '/images/icon/calendar/feeling-cat-normal.svg',
  },
  {
    feeling: Feeling.나쁨,
    url: '/images/icon/calendar/feeling-cat-bad.svg',
  },
  {
    feeling: Feeling.화남,
    url: '/images/icon/calendar/feeling-cat-angry.svg',
  },
];

const emotionImageSrc = [
  {
    emotion: Emotion.신나는,
    url: '/images/icon/emotion/신나는.svg',
  },
  {
    emotion: Emotion.편안한,
    url: '/images/icon/emotion/편안한.svg',
  },
  {
    emotion: Emotion.뿌듯한,
    url: '/images/icon/emotion/뿌듯한.svg',
  },
  {
    emotion: Emotion.기대되는,
    url: '/images/icon/emotion/기대되는.svg',
  },
  {
    emotion: Emotion.행복한,
    url: '/images/icon/emotion/행복한.svg',
  },
  {
    emotion: Emotion.의욕적인,
    url: '/images/icon/emotion/의욕적인.svg',
  },
  {
    emotion: Emotion.설레는,
    url: '/images/icon/emotion/설레는.svg',
  },
  {
    emotion: Emotion.상쾌한,
    url: '/images/icon/emotion/상쾌한.svg',
  },
  {
    emotion: Emotion.우울한,
    url: '/images/icon/emotion/우울한.svg',
  },
  {
    emotion: Emotion.외로운,
    url: '/images/icon/emotion/외로운.svg',
  },
  {
    emotion: Emotion.불안한,
    url: '/images/icon/emotion/불안한.svg',
  },
  {
    emotion: Emotion.슬픈,
    url: '/images/icon/emotion/슬픈.svg',
  },
  {
    emotion: Emotion.화난,
    url: '/images/icon/emotion/화난.svg',
  },
  {
    emotion: Emotion.부담되는,
    url: '/images/icon/emotion/부담되는.svg',
  },
  {
    emotion: Emotion.짜증나는,
    url: '/images/icon/emotion/짜증나는.svg',
  },
  {
    emotion: Emotion.피곤한,
    url: '/images/icon/emotion/피곤한.svg',
  },
];

type newDiaryType = {
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

  const handleChangeInputDiary = (e: any) => {
    const { value } = e.target;
    setDiary({
      ...diary,
      text: value,
    });
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
      <WritePostHeader />
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
            <InputBox
              type="text"
              id="diary"
              name="diary"
              placeholder="내용을 입력해 주세요"
              onChange={handleChangeInputDiary}
            />
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
