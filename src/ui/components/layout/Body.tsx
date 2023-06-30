import React, { PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import styleToken from '../../styles/styleToken.css';

export default function Body({ children }: PropsWithChildren) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  height: 100px;
  flex: 1 0 auto;
  display: flex;
  flex-direction: row;
  background-color: ${styleToken.color.background};
`;
