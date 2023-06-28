import styled from '@emotion/styled';

import CalendarImage from '../../assets/icon/menu/calendar.svg';

function MenuItem() {
  return (
    <>
      <Icon>
        <img src={CalendarImage} alt="calendar" style={{ width: 32, fill: 'red' }} />
      </Icon>
      <Icon>
        <img src="/images/icon/menu/report.svg" alt="report" style={{ width: 32, fill: 'red' }} />
      </Icon>
      <Icon>
        <img src="/images/icon/menu/timeline.svg" alt="timeline" style={{ width: 32, fill: '#d04b4b', stroke: '#d04b4b' }} />
      </Icon>
      <Icon>
        <img src="/images/icon/menu/setting.svg" alt="setting" style={{ width: 32, fill: 'currentColor', color: '#d04b4b' }} />
      </Icon>
      <FeelCatIcon>
        <img src="/images/icon/menu/feel-cat.svg" alt="report" style={{ width: 58 }} />
      </FeelCatIcon>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  padding: 0 57px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const FeelCatIcon = styled.div`
  width: 60px;
  height: 60px;
  padding: 5px 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  bottom: 50px;
  z-index: 1;
`;
