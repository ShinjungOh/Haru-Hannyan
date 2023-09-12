import styled from '@emotion/styled';

import { PropsWithChildren } from 'react';

export function Page({ children }: PropsWithChildren) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #e9e9e9;
`;
