import styled from '@emotion/styled';
import { useLocation } from 'react-router-dom';
import { PATH } from '@lib/const/path';
import { useNavigate } from 'react-router';
import useDateStore from '@lib/store/useDateStore';
import TodayFeeling from '@ui/components/layout/calendar/TodayFeeling';
import { useEffect, useState } from 'react';
import { Diary } from '@lib/types/diary.type';
import { feelCatIcon, menuIcon } from '@lib/const/ImageSrc';
import styleToken from '../../styles/styleToken.css';
import MenuItem from './MenuItem';
import { handleAxiosError, http } from '../../../api/http';

export default function Menu() {
  const location = useLocation();
  const navigate = useNavigate();

  const [currentDate] = useDateStore((state) => [state.currentDate]);
  const [diary, setDiary] = useState<Diary[]>();
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
      alert('이미 일기가 존재합니다.');
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const getMonthlyDiary = async () => {
      try {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth() + 1;
        const response = await http.get<{ diary: Diary[] }>(`/diary?year=${year}&month=${month}`);
        const diaryData = response.data;
        if (diaryData && diaryData.diary) {
          console.log(diaryData.diary);
          setDiary(diaryData.diary);
        }
      } catch (e) {
        const error = handleAxiosError(e);
        alert(error.msg);
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
