import styled from '@emotion/styled';
import { styleToken } from '@ui/styles';
import { useEffect, useState } from 'react';
import { Feeling } from '@lib/types';
import { CALENDAR_TYPE_IMG } from '@lib/const/imageSrc';
import { LOADING_BAR_INTERVAL_DELAY } from '@lib/const/config';

const LOADING_ICON = [
  CALENDAR_TYPE_IMG[Feeling.좋음],
  CALENDAR_TYPE_IMG[Feeling.행복],
  CALENDAR_TYPE_IMG[Feeling.보통],
  CALENDAR_TYPE_IMG[Feeling.나쁨],
];

export function LoadingBar() {
  const [loadingIndex, setLoadingIndex] = useState(0);

  const loadingImg = LOADING_ICON[loadingIndex];

  useEffect(() => {
    const handleLoadingIcon = setInterval(() => {
      setLoadingIndex((prevIndex) => (prevIndex + 1) % LOADING_ICON.length);
    }, LOADING_BAR_INTERVAL_DELAY);

    return () => clearInterval(handleLoadingIcon);
  }, [LOADING_ICON.length]);

  return (
    <BackDrop>
      <Container>
        <img src={loadingImg} alt="loading" />
      </Container>
    </BackDrop>
  );
}

const BackDrop = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 440px;
  height: 100%;
  max-height: 920px;
  background-color: ${styleToken.color.gray3}80;
  z-index: 9;
`;

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  background-color: ${styleToken.color.background};
  border-radius: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 100;

  img {
    width: 50px;
    height: 50px;
  }
`;
