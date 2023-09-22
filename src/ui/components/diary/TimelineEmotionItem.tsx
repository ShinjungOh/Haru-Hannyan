import styled from '@emotion/styled';
import { styleToken } from '@ui/styles';
import { Emotion } from '@lib/types';
import { useCallback, useEffect, useRef, useState } from 'react';
import { throttle } from '@lib/utils';

type TimelineEmotionItemProps = {
  emotions: Emotion[];
};

export function TimelineEmotionItem({ emotions }: TimelineEmotionItemProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState(0);

  const handleResize = useCallback(() => {
    if (containerRef.current && containerRef.current.clientWidth) {
      const newWidth = containerRef.current.clientWidth / 4.4;
      setWidth(newWidth || 0);
    }
  }, [containerRef]);

  const handleThrottleResize = useCallback(throttle(handleResize, 800), [handleResize]);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleThrottleResize);
    return () => {
      window.removeEventListener('resize', handleThrottleResize);
    };
  }, [containerRef]);

  return (
    <Container ref={containerRef}>
      <>
        {emotions &&
          emotions.map((emotion, index) => (
            <EmotionItem key={index} height={width}>
              <img src={`/images/icon/emotion/${emotion}.svg`} alt={emotion} />
            </EmotionItem>
          ))}
      </>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 6px;
  grid-column-gap: 6px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const EmotionItem = styled.div<{ height: number }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${(props) => props.height}px;
  border-radius: 50%;
  background-color: ${styleToken.color.secondary};
  cursor: pointer;

  img {
    width: 60%;
  }
`;
