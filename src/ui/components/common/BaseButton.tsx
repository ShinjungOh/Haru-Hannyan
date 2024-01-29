import styled from '@emotion/styled';
import { styleToken } from '@ui/styles';
import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

const colorSchemaStyle = {
  primary: {
    mainColor: styleToken.color.white,
    backgroundColor: styleToken.color.secondaryActive,
  },
  success: {
    mainColor: styleToken.color.white,
    backgroundColor: styleToken.color.alert_success,
  },
  danger: {
    mainColor: styleToken.color.white,
    backgroundColor: styleToken.color.alert_danger,
  },
  info: {
    mainColor: styleToken.color.white,
    backgroundColor: styleToken.color.primary,
  },
  light: {
    mainColor: styleToken.color.gray2,
    backgroundColor: styleToken.color.gray4,
  },
  disabled: {
    mainColor: styleToken.color.white,
    backgroundColor: styleToken.color.gray5,
  },
};

type ColorSchema = 'primary' | 'success' | 'danger' | 'info' | 'light' | 'disabled';

type Props = {
  colorTheme: ColorSchema;
  width?: string;
  height?: string;
  minHeight?: string;
  onKeyPress?: (e: KeyboardEvent) => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function BaseButton({ children, colorTheme, onKeyPress, ...props }: PropsWithChildren<Props>) {
  return (
    <Button type="button" colorTheme={colorTheme} onKeyPress={onKeyPress} {...props}>
      {children}
    </Button>
  );
}

const Button = styled.button<Props>`
  color: ${(props) => colorSchemaStyle[props.colorTheme].mainColor};
  background-color: ${(props) => colorSchemaStyle[props.colorTheme].backgroundColor};
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '54px'};
  min-height: ${(props) => props.minHeight || '0'};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  border: none;
  border-radius: 14px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => colorSchemaStyle[props.colorTheme].backgroundColor}dd;
  }
  &:disabled {
    cursor: not-allowed;
    background-color: ${styleToken.color.gray5};
    color: ${styleToken.color.white};
  }
`;
