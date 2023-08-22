import Header from '@ui/components/layout/Header';
import Body from '@ui/components/layout/Body';
import Menu from '@ui/components/layout/Menu';
import styled from '@emotion/styled';
import styleTokenCss from '@ui/styles/styleToken.css';

export default function TimelinePage() {
  return (
    <>
      <Header />
      <Container>
        <DiaryContainer>
          <FeelingAndDateContainer>
            <FeelingCat>
              <img src="images/icon/calendar/feeling-cat-great.svg" alt="feel" />
            </FeelingCat>
            <Date>01</Date>
            <DayName>월요일</DayName>
          </FeelingAndDateContainer>
          <EmotionAndTextContainer>
            <EmotionItem>
              <EmotionHeader>
                <img src="/images/icon/emotion/편안한.svg" alt="emotion" />
              </EmotionHeader>
              <EmotionHeader>
                <img src="/images/icon/emotion/신나는.svg" alt="emotion" />
              </EmotionHeader>
              <EmotionHeader>
                <img src="/images/icon/emotion/뿌듯한.svg" alt="emotion" />
              </EmotionHeader>
              <EmotionHeader>
                <img src="/images/icon/emotion/행복한.svg" alt="emotion" />
              </EmotionHeader>
            </EmotionItem>
            <TextContainer>text</TextContainer>
          </EmotionAndTextContainer>
        </DiaryContainer>
        <DeleteButton>삭제</DeleteButton>
        <DiaryContainer>
          <FeelingAndDateContainer>
            <FeelingCat>
              <img src="images/icon/calendar/feeling-cat-great.svg" alt="feel" />
            </FeelingCat>
            <Date>01</Date>
            <DayName>월요일</DayName>
          </FeelingAndDateContainer>
          <EmotionAndTextContainer>
            <EmotionItem>
              <EmotionHeader>
                <img src="/images/icon/emotion/편안한.svg" alt="emotion" />
              </EmotionHeader>
              <EmotionHeader>
                <img src="/images/icon/emotion/신나는.svg" alt="emotion" />
              </EmotionHeader>
              <EmotionHeader>
                <img src="/images/icon/emotion/뿌듯한.svg" alt="emotion" />
              </EmotionHeader>
              <EmotionHeader>
                <img src="/images/icon/emotion/행복한.svg" alt="emotion" />
              </EmotionHeader>
            </EmotionItem>
            <TextContainer>text</TextContainer>
          </EmotionAndTextContainer>
        </DiaryContainer>
        <DeleteButton>삭제</DeleteButton>
        <DiaryContainer>
          <FeelingAndDateContainer>
            <FeelingCat>
              <img src="images/icon/calendar/feeling-cat-great.svg" alt="feel" />
            </FeelingCat>
            <Date>01</Date>
            <DayName>월요일</DayName>
          </FeelingAndDateContainer>
          <EmotionAndTextContainer>
            <EmotionItem>
              <EmotionHeader>
                <img src="/images/icon/emotion/편안한.svg" alt="emotion" />
              </EmotionHeader>
              <EmotionHeader>
                <img src="/images/icon/emotion/신나는.svg" alt="emotion" />
              </EmotionHeader>
              <EmotionHeader>
                <img src="/images/icon/emotion/뿌듯한.svg" alt="emotion" />
              </EmotionHeader>
              <EmotionHeader>
                <img src="/images/icon/emotion/행복한.svg" alt="emotion" />
              </EmotionHeader>
            </EmotionItem>
            <TextContainer>text</TextContainer>
          </EmotionAndTextContainer>
        </DiaryContainer>
        <DeleteButton>삭제</DeleteButton>
        <DiaryContainer>
          <FeelingAndDateContainer>
            <FeelingCat>
              <img src="images/icon/calendar/feeling-cat-great.svg" alt="feel" />
            </FeelingCat>
            <Date>01</Date>
            <DayName>월요일</DayName>
          </FeelingAndDateContainer>
          <EmotionAndTextContainer>
            <EmotionItem>
              <EmotionHeader>
                <img src="/images/icon/emotion/편안한.svg" alt="emotion" />
              </EmotionHeader>
              <EmotionHeader>
                <img src="/images/icon/emotion/신나는.svg" alt="emotion" />
              </EmotionHeader>
              <EmotionHeader>
                <img src="/images/icon/emotion/뿌듯한.svg" alt="emotion" />
              </EmotionHeader>
              <EmotionHeader>
                <img src="/images/icon/emotion/행복한.svg" alt="emotion" />
              </EmotionHeader>
            </EmotionItem>
            <TextContainer>text</TextContainer>
          </EmotionAndTextContainer>
        </DiaryContainer>
        <DeleteButton>삭제</DeleteButton>
        <DiaryContainer>
          <FeelingAndDateContainer>
            <FeelingCat>
              <img src="images/icon/calendar/feeling-cat-great.svg" alt="feel" />
            </FeelingCat>
            <Date>01</Date>
            <DayName>월요일</DayName>
          </FeelingAndDateContainer>
          <EmotionAndTextContainer>
            <EmotionItem>
              <EmotionHeader>
                <img src="/images/icon/emotion/편안한.svg" alt="emotion" />
              </EmotionHeader>
              <EmotionHeader>
                <img src="/images/icon/emotion/신나는.svg" alt="emotion" />
              </EmotionHeader>
              <EmotionHeader>
                <img src="/images/icon/emotion/뿌듯한.svg" alt="emotion" />
              </EmotionHeader>
              <EmotionHeader>
                <img src="/images/icon/emotion/행복한.svg" alt="emotion" />
              </EmotionHeader>
            </EmotionItem>
            <TextContainer>text</TextContainer>
          </EmotionAndTextContainer>
        </DiaryContainer>
        <DeleteButton>삭제</DeleteButton>
      </Container>
      <Menu />
    </>
  );
}

const Container = styled(Body)`
  overflow-y: auto;
`;

const DiaryContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px 38px;
  padding: 18px;
  height: auto;
  min-height: 120px;
  border-radius: 15px;
  background-color: white;
  border: 1px solid ${styleTokenCss.color.gray5};
  font-size: 14px;
`;

const FeelingAndDateContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
`;

const FeelingCat = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 42px;

  img {
    width: 42px;
    height: 42px;
  }
`;

const Date = styled.div`
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
  height: 100%;
`;

const EmotionItem = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
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
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 0 10px;
  margin-top: 15px;
  font-size: 14px;
  color: ${styleTokenCss.color.gray2};
`;

const DeleteButton = styled.button`
  position: relative;
  bottom: 5px;
  left: 350px;
  width: 50px;
  height: auto;
  border: none;
  background-color: unset;
  color: ${styleTokenCss.color.gray2};
  cursor: pointer;
`;
