const COLOR_PROPERTIES = {
  background: '#FFFCF5',
  border: '#CDD5DF',
  primary: '#FAC94D',
  secondary: '#C8E1FF',
  secondaryActive: '#95C2F8',
  alert_success: '#9EACF6',
  alert_danger: '#FF8282',
  kakao: '#FEE500',
  black: '#000000',
  gray1: '#131313',
  gray2: '#707070',
  gray3: '#A1A1A1',
  gray4: '#D3D3D3',
  gray5: '#E9E9E9',
  white: '#ffffff',
};

const FONT_PROPERTIES = {
  weightBold: 600,
  weightMedium: 500,
  weightRegular: 400,
};

const headerHeight = 80;
const menuHeight = 80;
const SIZE_PROPERTIES = {
  headerHeight: `${headerHeight}px`,
  menuHeight: `${menuHeight}px`,
};

const styleToken = {
  color: COLOR_PROPERTIES,
  font: FONT_PROPERTIES,
  size: SIZE_PROPERTIES,
};

export default styleToken;
