import React from 'react';
import styled from '@emotion/styled';

import { useBoolean } from 'usehooks-ts';
import { useNavigate } from 'react-router';
import styleToken from '../../styles/styleToken.css';

export default function Menu() {
  const { value: playing, setValue, toggle: togglePlaying } = useBoolean();
  const navigate = useNavigate();

  const handleChangePage = ({ path }: { path: string }) => {
    console.log('page');
    togglePlaying();
    navigate(`/${path}`);
  };

  const customToggle = () => setValue((active: boolean) => !active);

  return (
    <Container>
      <MenuItem
        path="calender"
        image="/images/icon/menu/calendar.svg"
        activeImage="/images/icon/menu/calendar-active.svg"
        onChangePage={() => handleChangePage(path)}
        active={playing}
      />
      <MenuItem path="timeline" image="/images/icon/menu/timeline.svg" activeImage="/images/icon/menu/timeline-active.svg" onChangePage={handleChangePage} active={playing} />
      <MenuItem path="report" image="/images/icon/menu/report.svg" activeImage="/images/icon/menu/report-active.svg" onChangePage={handleChangePage} active={playing} />
      <MenuItem path="setting" image="/images/icon/menu/setting.svg" activeImage="/images/icon/menu/setting-active.svg" onChangePage={handleChangePage} active={playing} />
      {/* <Icon> */}
      {/*  <img src="/images/icon/menu/calendar.svg" alt="calendar" style={{ width: 32, fill: 'red' }} /> */}
      {/* </Icon> */}
      {/* <Icon> */}
      {/*  <img src="/images/icon/menu/report.svg" alt="report" style={{ width: 32, fill: 'red' }} /> */}
      {/* </Icon> */}
      {/* <Icon> */}
      {/*  <img src="/images/icon/menu/timeline.svg" alt="timeline" style={{ width: 32, fill: '#d04b4b', stroke: '#d04b4b' }} /> */}
      {/* </Icon> */}
      {/* <Icon> */}
      {/*  <img src="/images/icon/menu/setting.svg" alt="setting" style={{ width: 32, fill: 'currentColor', color: '#d04b4b' }} /> */}
      {/* </Icon> */}
      <FeelCatIcon>
        <img src="/images/icon/menu/feel-cat.svg" alt="cat-icon" style={{ width: 58 }} />
      </FeelCatIcon>
    </Container>
  );
}

const MenuItem = ({ image, activeImage, active, onChangePage }) => (
  <Icon onClick={onChangePage}>
    <img src={active ? activeImage : image} alt="menu-icon" style={{ width: 32 }} />
  </Icon>
);

//
// const MenuItem = ({ image, path, activeImage, path, currentPath }: { image: string; ativeImage: string; path: string; currentPath: string }) => (
//   <Icon>
//     <img src={image} alt="menu-icon" style={{ width: 32 }} />
//   </Icon>
// );

const Container = styled.div`
  height: ${styleToken.size.headerHeight};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-top: 1px solid ${styleToken.color.gray4};
  background-color: ${styleToken.color.background};
  position: relative;
  top: 840px;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  padding: 30px 57px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border: 1px solid blue;
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
  border: 1px solid red;
  background-color: red;
`;
