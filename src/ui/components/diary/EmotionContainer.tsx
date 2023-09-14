import { emotionImageSrc } from '@lib/const/imageSrc';
import styled from '@emotion/styled';
import { Emotion } from '@lib/types';
import { styleToken } from '@ui/styles';
import { Typography } from '@ui/components/common';

type EmotionContainerProps = {
  diary: any;
  onClick: (emotion: Emotion) => void;
};

export function EmotionContainer({ diary, onClick }: EmotionContainerProps) {
  return (
    <Container>
      <Typography variant="subtitle4" color={styleToken.color.gray3}>
        감정
      </Typography>
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
  padding: 16px;
  margin-top: 20px;
  width: 100%;
  height: auto;
  border-radius: 15px;
  background-color: white;
  border: 1px solid ${styleToken.color.gray5};
  font-size: 14px;
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
  background-color: ${styleToken.color.secondary};
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
  color: ${styleToken.color.gray3};
`;
