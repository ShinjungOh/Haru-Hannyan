import { useNavigate } from 'react-router';
import styled from '@emotion/styled';
import { styleToken } from '@ui/styles';
import { Typography } from '@ui/components/common/Typography';

type Props = {
  isBack: boolean;
  title?: string;
  onBack?: () => void;
};
export function NavigationHeader({ isBack, title, onBack }: Props) {
  const navigate = useNavigate();

  const handlePageBack = () => {
    if (onBack) {
      onBack();
      return;
    }
    navigate(-1);
  };

  return (
    <Container>
      <>
        {isBack && <BackArrow onClick={handlePageBack} src="/images/icon/back.svg" alt="back" />}
        {title && <Typography variant="h4">{title}</Typography>}
      </>
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
  height: ${styleToken.size.headerHeight};
  background-color: ${styleToken.color.background};
`;

const BackArrow = styled.img`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 60px;
  height: 60px;
  padding: 0 22px;
  cursor: pointer;
`;
