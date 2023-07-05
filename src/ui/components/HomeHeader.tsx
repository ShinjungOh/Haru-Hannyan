import { useNavigate } from 'react-router';
import styled from '@emotion/styled';

export default function HomeHeader() {
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

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

const BackArrow = styled.img`
  padding: 21px;
  cursor: pointer;
`;
