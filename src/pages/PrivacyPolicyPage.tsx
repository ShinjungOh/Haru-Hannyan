import styled from '@emotion/styled';
import { NavigationHeader, Typography } from '@ui/components/common';
import { Body } from '@ui/components/layout';

export function PrivacyPolicyPage() {
  return (
    <>
      <NavigationHeader isBack title="개인정보처리방침" />
      <Container>
        <Typography variant="body2">개인정보처리방침</Typography>
      </Container>
    </>
  );
}

const Container = styled(Body)`
  overflow-y: auto;
  padding: 5px 34px 15px 34px;
  width: 100%;
`;
