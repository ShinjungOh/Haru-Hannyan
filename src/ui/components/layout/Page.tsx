import styled from '@emotion/styled';

import React from 'react';
import { Layout } from './index';

type Props = {
  children: React.ReactNode;
};

export default function Page({ children }: Props) {
  return (
    <Container>
      <Layout>{children}</Layout>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #e9e9e9;
`;
