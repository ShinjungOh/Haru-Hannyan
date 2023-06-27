import { Theme } from '@emotion/react';

export const theme: Theme = {
  color: {
    text: '#666',
    background: '#FFFCF5',
    border: '#cdd5df',
    primary: '#FAC94D',
    sub: '#C8E1FF',
    subActive: '#95C2F8',
    alert1: '#9EACF6',
    alert2: '#FF8282',
    black: '#000000',
    gray1: '#131313',
    gray2: '#707070',
    gray3: '#A1A1A1',
    gray4: '#D3D3D3',
    gray5: '#E9E9E9',
    white: '#ffffff',
  },
};

const headerHeight = 80;
export const SIZE_PROPERTIES = {
  headerHeight: `${headerHeight}px`,
  bodyHeight: `calc(100vh - ${headerHeight}px)`,
};
