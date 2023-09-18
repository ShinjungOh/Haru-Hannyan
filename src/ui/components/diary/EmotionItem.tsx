import styled from '@emotion/styled';
import { styleToken } from '@ui/styles';
import { Emotion } from '@lib/types';
import { useCallback, useEffect, useRef, useState } from 'react';

type EmotionItemProps = {
  emotion: any;
  imgSrc: string;
  isSelected: boolean;
  onClick: (emotion: Emotion) => void;
};

const throttle = (callback: (...args: any[]) => void, ms: number): ((...args: any[]) => void) => {
  let timer: NodeJS.Timeout | null = null;

  return (...args: any[]) => {
    if (!timer) {
      timer = setTimeout(() => {
        timer = null;
        callback(...args);
        console.log(window.innerWidth);
      }, ms);
    }
  };
};

export function EmotionItem({ emotion, imgSrc, isSelected, onClick }: EmotionItemProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState(0);

  const handleResize = useCallback(() => {
    if (containerRef.current) {
      setWidth(containerRef.current?.clientWidth || 0);
    }
  }, [containerRef]);

  const handleThrottleResize = useCallback(throttle(handleResize, 1000), [handleResize]);

  useEffect(() => {
    handleResize();

    window.addEventListener('resize', handleThrottleResize);
    return () => {
      window.removeEventListener('resize', handleThrottleResize);
    };
  }, [handleResize]);

  return (
    <Container onClick={() => onClick(emotion)} ref={containerRef}>
      <EmotionHeader isSelected={isSelected} height={width}>
        <img src={imgSrc} alt={emotion} />
      </EmotionHeader>
      <EmotionBody>{emotion}</EmotionBody>
    </Container>
  );
}

const Container = styled.div`
  width: 80%;
  height: auto;
  margin-left: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const EmotionHeader = styled.div<{ isSelected: boolean; height: number }>`
  width: 100%;
  height: ${(props) => props.height}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${styleToken.color.secondary};
  cursor: pointer;
  opacity: ${(props) => (props.isSelected ? '100%' : '45%')};

  img {
    width: 60%;
  }

  :hover {
    opacity: 100%;
  }
`;

const EmotionBody = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 7px;
  font-size: 12px;
  font-weight: 600;
  color: ${styleToken.color.gray3};
`;
