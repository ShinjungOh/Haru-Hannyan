import styled from '@emotion/styled';
import styleToken from '../../styles/styleToken.css';

export default function Header() {
  return (
    <Container>
      <ArrowLeft>﹤</ArrowLeft>
      <SelectDate>2023년 7월</SelectDate>
      <ArrowRight>﹥</ArrowRight>
    </Container>
  );
}

const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: ${styleToken.size.headerHeight};
  background-color: ${styleToken.color.background};
  font-weight: 600;
`;

const ArrowLeft = styled.div`
  padding: 0 12px;
  color: ${styleToken.color.primary};
  cursor: pointer;
`;

const SelectDate = styled.div`
  font-size: 20px;
  color: ${styleToken.color.gray2};
`;

const ArrowRight = styled.div`
  padding: 0 12px;
  color: ${styleToken.color.gray4};
  cursor: pointer;
`;
