import styled from '@emotion/styled';
import { useLocation } from 'react-router-dom';
import styleToken from '../../styles/styleToken.css';
import { PATH } from '../../../lib/const/path';

import MenuItem from './MenuItem';

const menuIcon = {
  [PATH.CALENDAR]: { active: '/images/icon/menu/calendar-active.svg', inactive: '/images/icon/menu/calendar.svg' },
  [PATH.TIMELINE]: { active: '/images/icon/menu/timeline-active.svg', inactive: '/images/icon/menu/timeline.svg' },
  [PATH.REPORT]: { active: '/images/icon/menu/report-active.svg', inactive: '/images/icon/menu/report.svg' },
  [PATH.SETTING]: { active: '/images/icon/menu/setting-active.svg', inactive: '/images/icon/menu/setting.svg' },
  feelCat: '/images/icon/menu/feel-cat.svg',
};

export default function Menu() {
  const location = useLocation();

  const getMenuIcon = (path: 'calendar' | 'timeline' | 'report' | 'setting') => {
    const pathUpper = path.toUpperCase();
    if (location.pathname === `/${path}`) {
      return menuIcon[PATH[pathUpper]].active;
    }
    return menuIcon[PATH[pathUpper]].inactive;
  };

  return (
    <Container>
      <MenuItem imageSrc={getMenuIcon('calendar')} path={PATH.CALENDAR} />
      <MenuItem imageSrc={getMenuIcon('timeline')} path={PATH.TIMELINE} />
      <MenuItem imageSrc={getMenuIcon('report')} path={PATH.REPORT} />
      <MenuItem imageSrc={getMenuIcon('setting')} path={PATH.SETTING} />
      <FeelCatIcon>
        <img src={menuIcon.feelCat} alt="cat-icon" style={{ width: 58 }} />
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
  background-color: ${styleToken.color.white};
  position: relative;
  top: 825px;
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
  bottom: 53px;
  cursor: pointer;
  z-index: 1;
`;
