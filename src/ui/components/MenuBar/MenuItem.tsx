import styled from '@emotion/styled';
import { useNavigate } from 'react-router';
import styleToken from '../../styles/styleToken.css';

type MenuItemProps = {
  imageSrc: string;
  path: string;
};

export default function MenuItem({ imageSrc, path }: MenuItemProps) {
  const navigate = useNavigate();

  const handleChangePage = () => {
    navigate(path);
  };

  return (
    <Icon onClick={handleChangePage}>
      <img src={imageSrc} alt={path} style={{ width: 32 }} />
    </Icon>
  );
}

const Icon = styled.div`
  height: ${styleToken.size.headerHeight};
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
`;
