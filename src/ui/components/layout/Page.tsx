import styled from '@emotion/styled';
import { styleToken } from '@ui/styles';
import { PropsWithChildren, useEffect } from 'react';

export function Page({ children }: PropsWithChildren) {
  function setScreenSize() {
    const vh = window.innerHeight * 0.01;

    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  useEffect(() => {
    setScreenSize();
  }, []);

  return <Container>{children}</Container>;
}

const Container = styled.div`
  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);
  background-color: ${styleToken.color.gray5};
`;
