import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 440px;
  height: 100%;
  max-height: 920px;
  background-color: #ffffff;
`;
