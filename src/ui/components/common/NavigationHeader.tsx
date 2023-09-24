import { useNavigate } from 'react-router';
import styled from '@emotion/styled';
import { styleToken } from '@ui/styles';
import { Typography } from '@ui/components/common/Typography';

type Props = {
  isBack: boolean;
  title?: string;
};
export function NavigationHeader({ isBack, title }: Props) {
  const navigate = useNavigate();

  const handlePageBack = () => {
    navigate(-1);
  };

  return (
    <Container>
      {isBack && <BackArrow onClick={handlePageBack} src="/images/icon/back.png" alt="back" />}
      {title && <Typography variant="h4">{title}</Typography>}
    </Container>
  );
}

const Container = styled.header`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  background-color: ${styleToken.color.background};
`;

const BackArrow = styled.img`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  padding: 21px;
  cursor: pointer;
`;
