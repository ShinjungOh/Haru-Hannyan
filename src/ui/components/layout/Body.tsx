import { PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import styleToken from '../../styles/styleToken.css';

type BodyProps = {
  [K: string]: unknown;
};

export default function Body({ children, ...props }: PropsWithChildren<BodyProps>) {
  return <Container {...props}>{children}</Container>;
}

const Container = styled.div`
  height: 100px;
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  background-color: ${styleToken.color.background};
`;
