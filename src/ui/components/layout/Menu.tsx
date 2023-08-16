import styled from '@emotion/styled';
import { useLocation } from 'react-router-dom';
import { PATH } from '@lib/const/path';
import { useNavigate } from 'react-router';
import useDateStore from '@lib/store/useDateStore';
import TodayFeeling from '@ui/components/TodayFeeling';
import { useState } from 'react';
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
  const navigate = useNavigate();

  const [currentDate] = useDateStore((state) => [state.currentDate]);
  const [isOpen, setIsOpen] = useState(false);

  const getMenuIcon = (iconKey: 'CALENDAR' | 'TIMELINE' | 'REPORT' | 'SETTING') => {
    const menuIconKey = PATH[iconKey];
    const pathName = location.pathname.toUpperCase();

    if (pathName === `/${iconKey}`) {
      return menuIcon[menuIconKey].active;
    }
    return menuIcon[menuIconKey].inactive;
  };

  const handleCreateTodayDiary = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleClickTodayFeeling = (feeling: string) => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const date = currentDate.getDate();
    navigate(`/calendar/write?year=${year}&month=${month}&date=${date}&feeling=${feeling}`);
  };

  return (
    <Container>
      <MenuItem imageSrc={getMenuIcon('CALENDAR')} path={PATH.CALENDAR} />
      <MenuItem imageSrc={getMenuIcon('TIMELINE')} path={PATH.TIMELINE} />
      <MenuItem imageSrc={getMenuIcon('REPORT')} path={PATH.REPORT} />
      <MenuItem imageSrc={getMenuIcon('SETTING')} path={PATH.SETTING} />
      <>{isOpen && <TodayFeeling onClick={handleClickTodayFeeling} />}</>
      <FeelCatIcon onClick={handleCreateTodayDiary}>
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
  z-index: 2;
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
