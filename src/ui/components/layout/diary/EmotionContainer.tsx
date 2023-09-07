import { emotionImageSrc } from '@lib/const/imageSrc';
import styled from '@emotion/styled';
import styleTokenCss from '@ui/styles/styleToken.css';
import { Emotion } from '@lib/types/diary.type';

type EmotionContainerProps = {
  diary: any;
  onClick: (emotion: Emotion) => void;
};

export default function EmotionContainer({ diary, onClick }: EmotionContainerProps) {
  return (
    <Container>
      <h4>감정</h4>
      <EmotionList>
        <>
          {emotionImageSrc.map((el, index) => {
            const isSelected = diary.emotions.includes(el.emotion);
            return (
              <EmotionItem key={index} onClick={() => onClick(el.emotion)}>
                <EmotionHeader isSelected={isSelected}>
                  <img src={el.url} alt={el.emotion} />
                </EmotionHeader>
                <EmotionBody>{el.emotion}</EmotionBody>
              </EmotionItem>
            );
          })}
        </>
      </EmotionList>
    </Container>
  );
}

const Container = styled.div`
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
    color: ${styleTokenCss.color.gray2};
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
