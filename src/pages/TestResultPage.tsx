import styled from '@emotion/styled';
import { useNavigate } from 'react-router';
import { NavigationHeader } from '@ui/components/common';
import { Body } from '@ui/components/layout';
import { PATH } from '@lib/const/path';

export function TestResultPage() {
  const navigate = useNavigate();

  const handlePageBack = () => {
    navigate(PATH.REPORT);
  };

  return (
    <>
      <NavigationHeader title="스트레스 측정하기" isBack onBack={handlePageBack} />
      <Container>TestResultPage</Container>
    </>
  );
}

const Container = styled(Body)`
  overflow-y: auto;
  padding: 5px 34px 15px 34px;
  width: 100%;
`;
