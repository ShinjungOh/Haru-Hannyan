import styled from '@emotion/styled';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  width: 100vw;
  max-width: 440px;
  height: 100vh;
  max-height: 920px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
`;
