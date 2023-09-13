import { useNavigate } from 'react-router';
import styled from '@emotion/styled';
import { styleToken } from '@ui/styles';

export function NavigationHeader() {
  const navigate = useNavigate();

  const handlePageBack = () => {
    navigate(-1);
  };

  return (
    <Container>
      <BackArrow onClick={handlePageBack} src="/images/icon/back.png" alt="back" />
    </Container>
  );
}

const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  background-color: ${styleToken.color.background};
`;

const BackArrow = styled.img`
  padding: 21px;
  cursor: pointer;
`;
