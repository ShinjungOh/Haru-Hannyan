import styled from '@emotion/styled';

import { useNavigate } from 'react-router';
import styleToken from '../../styles/styleToken.css';
import { PATH } from '../../../lib/const/path';

function MenuItem({ imageSrc, path }: { imageSrc: string; path: string }) {
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

export default function Menu() {
  return (
    <Container>
      <MenuItem imageSrc={window.location.pathname === '/calendar' ? '/images/icon/menu/calendar-active.svg' : '/images/icon/menu/calendar.svg'} path={PATH.CALENDAR} />
      <MenuItem imageSrc={window.location.pathname === '/timeline' ? '/images/icon/menu/timeline-active.svg' : '/images/icon/menu/timeline.svg'} path={PATH.TIMELINE} />
      <MenuItem imageSrc={window.location.pathname === '/report' ? '/images/icon/menu/report-active.svg' : '/images/icon/menu/report.svg'} path={PATH.REPORT} />
      <MenuItem imageSrc={window.location.pathname === '/setting' ? '/images/icon/menu/setting-active.svg' : '/images/icon/menu/setting.svg'} path={PATH.SETTING} />
      <FeelCatIcon>
        <img src="/images/icon/menu/feel-cat.svg" alt="cat-icon" style={{ width: 58 }} />
      </FeelCatIcon>
    </Container>
  );
}

const Container = styled.div`
  height: ${styleToken.size.headerHeight};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-top: 1px solid ${styleToken.color.gray4};
  background-color: ${styleToken.color.background};
  position: relative;
  top: 825px;
`;

const Icon = styled.div`
  height: ${styleToken.size.headerHeight};
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
`;

const FeelCatIcon = styled.div`
  width: 60px;
  height: 60px;
  padding: 5px 35px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  bottom: 50px;
  cursor: pointer;
  z-index: 1;
`;
