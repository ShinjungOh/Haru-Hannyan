import styled from '@emotion/styled';
import { styleToken } from '@ui/styles';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { MenuItem } from '@ui/components/menu';
import { TodayFeeling } from '@ui/components/calendar';
import { useAlert, useAxiosErrorAlert } from '@lib/hooks';
import { FEELING_CAT_ICON, MENU_ICON } from '@lib/const/imageSrc';
import { PATH } from '@lib/const/path';
import useDateStore from '@lib/store/useDateStore';
import { Diary } from '@lib/types';
import { apiGetMonthlyDiary } from '../../../api/diary';

export function Menu() {
  const location = useLocation();
  const navigate = useNavigate();
  const alert = useAlert();
  const axiosErrorAlert = useAxiosErrorAlert();

  const [currentDate] = useDateStore((state) => [state.currentDate]);
  const [diary, setDiary] = useState<Diary[]>();
  const [isOpen, setIsOpen] = useState(false);

  const localPathName = location.pathname.toUpperCase();
  const pathName = localPathName.split('/').filter((el) => el);

  const getMenuIcon = (iconKey: 'CALENDAR' | 'TIMELINE' | 'REPORT' | 'SETTING') => {
    const menuIconKey = PATH[iconKey];

    if (pathName[0] === `${iconKey}`) {
      return MENU_ICON[menuIconKey].active;
    }
    return MENU_ICON[menuIconKey].inactive;
  };

  const handleCreateTodayDiary = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleClickTodayFeeling = async (feeling: string) => {
    const today = `${currentDate.getFullYear()}${currentDate.getMonth() + 1}${currentDate.getDate()}`;
    const isAlreadyTodayDiary = () => {
      const dateFormat = diary && diary.map((el) => `${el.createDate.year}${el.createDate.month}${el.createDate.date}`);
      return dateFormat && dateFormat.includes(today);
    };

    if (diary && !isAlreadyTodayDiary()) {
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth() + 1;
      const date = currentDate.getDate();
      navigate(`/calendar/write?year=${year}&month=${month}&date=${date}&feeling=${feeling}`);
    } else if (diary && !!isAlreadyTodayDiary()) {
      const responseAlert = await alert({
        type: 'danger',
        title: '이미 일기가 존재해요.',
      });
      if (responseAlert) {
        setIsOpen(false);
      }
    }
  };

  useEffect(() => {
    const getMonthlyDiary = async () => {
      try {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth() + 1;
        const responseGetMonthlyDiary = await apiGetMonthlyDiary(year, month);

        if (responseGetMonthlyDiary.success && responseGetMonthlyDiary.data) {
          setDiary(responseGetMonthlyDiary.data.diary);
        }
      } catch (e) {
        await axiosErrorAlert(e);
      }
    };

    getMonthlyDiary();
  }, [currentDate]);

  return (
    <Container>
      <MenuItem imageSrc={getMenuIcon('CALENDAR')} path={PATH.CALENDAR} />
      <MenuItem imageSrc={getMenuIcon('TIMELINE')} path={PATH.TIMELINE} />
      <MenuItem imageSrc={getMenuIcon('REPORT')} path={PATH.REPORT} />
      <MenuItem imageSrc={getMenuIcon('SETTING')} path={PATH.SETTING} />
      <>{isOpen && <TodayFeeling onClick={handleClickTodayFeeling} />}</>
      <FeelCatIcon onClick={handleCreateTodayDiary}>
        <img src={FEELING_CAT_ICON} alt="cat-icon" />
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
