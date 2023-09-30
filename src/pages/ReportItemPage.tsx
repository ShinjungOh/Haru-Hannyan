import styled from '@emotion/styled';
import { Body } from '@ui/components/layout';
import { Menu } from '@ui/components/menu';
import { NavigationHeader } from '@ui/components/common';

export function ReportItemPage() {
  return (
    <>
      <NavigationHeader title="스트레스 측정하기" isBack />
      <Container>Report Item</Container>
      <Menu />
    </>
  );
}

const Container = styled(Body)`
  overflow-y: auto;
  padding: 5px 34px 15px 34px;
  width: 100%;
`;
