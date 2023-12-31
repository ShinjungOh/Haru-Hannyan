import styled from '@emotion/styled';
import { styleToken } from '@ui/styles';
import { Emotion } from '@lib/types';
import { EmotionItem } from '@ui/components/diary/EmotionItem';
import { Typography } from '@ui/components/common';
import { EMOTION_TYPE } from '@lib/const/imageSrc';

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
          {EMOTION_TYPE.map((emotion) => {
            const isSelected = diary.emotions.includes(emotion.emotion);

            return (
              <EmotionItem
                key={emotion.emotion}
                emotion={emotion.emotion}
                imgSrc={emotion.url}
                isSelected={isSelected}
                onClick={onClick}
              />
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
  grid-row-gap: 16px;
  margin-top: 14px;
  margin-bottom: 14px;
  width: 100%;
  height: 100%;
  justify-content: center;
`;
