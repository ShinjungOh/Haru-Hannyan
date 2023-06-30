import styled from '@emotion/styled';
import { useLocation } from 'react-router-dom';
import { PATH } from '@lib/const/path';
import styleToken from '../../styles/styleToken.css';

import MenuItem from './MenuItem';

const menuIcon = {
  [PATH.CALENDAR]: { active: '/images/icon/menu/calendar-active.svg', inactive: '/images/icon/menu/calendar.svg' },
  [PATH.TIMELINE]: { active: '/images/icon/menu/timeline-active.svg', inactive: '/images/icon/menu/timeline.svg' },
  [PATH.REPORT]: { active: '/images/icon/menu/report-active.svg', inactive: '/images/icon/menu/report.svg' },
  [PATH.SETTING]: { active: '/images/icon/menu/setting-active.svg', inactive: '/images/icon/menu/setting.svg' },
};

const feelCatIcon = '/images/icon/menu/feel-cat.svg';

export default function Menu() {
  const location = useLocation();

  const getMenuIcon = (iconKey: 'CALENDAR' | 'TIMELINE' | 'REPORT' | 'SETTING') => {
    const menuIconKey = PATH[iconKey];

    if (location.pathname === `/${iconKey}`) {
      return menuIcon[menuIconKey].active;
    }
    return menuIcon[menuIconKey].inactive;
  };

  return (
    <Container>
      <MenuItem imageSrc={getMenuIcon('CALENDAR')} path={PATH.CALENDAR} />
      <MenuItem imageSrc={getMenuIcon('TIMELINE')} path={PATH.TIMELINE} />
      <MenuItem imageSrc={getMenuIcon('REPORT')} path={PATH.REPORT} />
      <MenuItem imageSrc={getMenuIcon('SETTING')} path={PATH.SETTING} />
      <FeelCatIcon>
        <img src={feelCatIcon} alt="cat-icon" />
      </FeelCatIcon>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: ${styleToken.size.menuHeight};
  border-top: 1px solid ${styleToken.color.gray4};
  background-color: ${styleToken.color.white};
`;

const FeelCatIcon = styled.div`
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  padding: 5px 35px;
  cursor: pointer;
  z-index: 1;

  & img {
    width: 58px;
  }
`;
