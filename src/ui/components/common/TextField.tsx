import styled from '@emotion/styled';
import { styleToken } from '@ui/styles';
import { ChangeEvent, KeyboardEvent } from 'react';

type TextFieldProps = {
  type: string;
  id: string;
  name: string;
  value: string;
  placeholder: string;
  autoFocus?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyPress?: (e: KeyboardEvent<HTMLInputElement>) => void;
};

export function TextField({ type, id, name, value, placeholder, autoFocus, onChange, onKeyPress }: TextFieldProps) {
  const handleOnKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (onKeyPress) {
      onKeyPress(e);
    }
  };

  return (
    <Input
      type={type}
      id={id}
      name={name}
      value={value}
      placeholder={placeholder}
      autoFocus={Boolean(autoFocus)}
      onChange={onChange}
      onKeyPress={handleOnKeyPress}
    />
  );
}

const Input = styled.input`
  width: 100%;
  height: 54px;
  padding: 20px 14px;
  border-radius: 14px;
  border: 1px solid ${styleToken.color.gray4};
  color: ${styleToken.color.gray2};
  font-size: 16px;
  outline: 0;
  cursor: pointer;

  ::placeholder {
    color: ${styleToken.color.gray4};
  }
`;
