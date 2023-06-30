import styled from '@emotion/styled';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
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
