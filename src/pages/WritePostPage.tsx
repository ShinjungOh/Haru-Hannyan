import Body from '@ui/components/layout/Body';
import WritePostHeader from '@ui/components/layout/WritePostHeader';
import styled from '@emotion/styled';
import styleTokenCss from '@ui/styles/styleToken.css';
import { Emotion, Feeling } from '@lib/types/diary.type';
import InputBox from '@ui/components/InputBox';
import { useSearchParams } from 'react-router-dom';

const FeelingCatTypeSrc = [
  {
    feeling: [Feeling.행복],
    url: '/images/icon/calendar/feeling-cat-great.svg',
  },
  {
    feeling: [Feeling.좋음],
    url: '/images/icon/calendar/feeling-cat-good.svg',
  },
  {
    feeling: [Feeling.보통],
    url: '/images/icon/calendar/feeling-cat-normal.svg',
  },
  {
    feeling: [Feeling.나쁨],
    url: '/images/icon/calendar/feeling-cat-bad.svg',
  },
  {
    feeling: [Feeling.화남],
    url: '/images/icon/calendar/feeling-cat-angry.svg',
  },
];

const emotionImageSrc = [
  {
    emotion: [Emotion.신나는],
    url: '/images/icon/emotion/신나는.svg',
  },
  {
    emotion: [Emotion.편안한],
    url: '/images/icon/emotion/편안한.svg',
  },
  {
    emotion: [Emotion.뿌듯한],
    url: '/images/icon/emotion/뿌듯한.svg',
  },
  {
    emotion: [Emotion.기대되는],
    url: '/images/icon/emotion/기대되는.svg',
  },
  {
    emotion: [Emotion.행복한],
    url: '/images/icon/emotion/행복한.svg',
  },
  {
    emotion: [Emotion.의욕적인],
    url: '/images/icon/emotion/의욕적인.svg',
  },
  {
    emotion: [Emotion.설레는],
    url: '/images/icon/emotion/설레는.svg',
  },
  {
    emotion: [Emotion.상쾌한],
    url: '/images/icon/emotion/상쾌한.svg',
  },
  {
    emotion: [Emotion.우울한],
    url: '/images/icon/emotion/우울한.svg',
  },
  {
    emotion: [Emotion.외로운],
    url: '/images/icon/emotion/외로운.svg',
  },
  {
    emotion: [Emotion.불안한],
    url: '/images/icon/emotion/불안한.svg',
  },
  {
    emotion: [Emotion.슬픈],
    url: '/images/icon/emotion/슬픈.svg',
  },
  {
    emotion: [Emotion.화난],
    url: '/images/icon/emotion/화난.svg',
  },
  {
    emotion: [Emotion.부담되는],
    url: '/images/icon/emotion/부담되는.svg',
  },
  {
    emotion: [Emotion.짜증나는],
    url: '/images/icon/emotion/짜증나는.svg',
  },
  {
    emotion: [Emotion.피곤한],
    url: '/images/icon/emotion/피곤한.svg',
  },
];

export default function WritePostPage() {
  const handleChangeInputDiary = () => {
    console.log('change');
  };

  const [params] = useSearchParams();

  const todayFeeling = params.get('feeling');

  console.log(todayFeeling);

  return (
    <>
      <WritePostHeader />
      <Body>
        <Container>
          <FeelingContainer>
            <div>오늘은 어떤 고양이인가요?</div>
            <FeelingCat>
              <>
                {FeelingCatTypeSrc.map((el, index) => (
                  <img key={index} src={el.url} alt="기분 아이콘" />
                ))}
              </>
            </FeelingCat>
          </FeelingContainer>
          <EmotionContainer>
            <div>감정</div>
            <Emotions>
              <>
                {emotionImageSrc.map((el, index) => (
                  <EmotionItem key={index}>
                    <img src={el.url} alt="감정 아이콘" />
                    <EmotionName>{el.emotion}</EmotionName>
                  </EmotionItem>
                ))}
              </>
            </Emotions>
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
          <Button type="button">작성완료</Button>
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
  height: 100px;
  border-radius: 15px;
  background-color: white;
  border: 1px solid ${styleTokenCss.color.gray5};
  font-size: 14px;

  div {
    font-weight: 600;
    color: ${styleTokenCss.color.gray3};
  }
`;

const FeelingCat = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    margin: 13px;
    opacity: 60%;

    :hover {
      opacity: 100%;
    }
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
  height: 400px;
  border-radius: 15px;
  background-color: white;
  border: 1px solid ${styleTokenCss.color.gray5};
  font-size: 14px;

  div {
    padding-bottom: 20px;
    font-weight: 600;
    color: ${styleTokenCss.color.gray3};
  }
`;

const Emotions = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
`;

const EmotionItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background-color: ${styleTokenCss.color.secondary};
  cursor: pointer;
  opacity: 60%;

  :hover {
    opacity: 100%;
  }

  img {
    width: 33px;
  }
`;

const EmotionName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 18px;
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
`;
