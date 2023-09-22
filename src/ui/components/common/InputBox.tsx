import styled from '@emotion/styled';
import { ChangeEvent, KeyboardEvent } from 'react';
import { styleToken } from '@ui/styles';

type InputBoxProps = {
  type: string;
  id: string;
  name: string;
  placeholder: string;
  autoFocus?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyPress?: (e: KeyboardEvent<HTMLInputElement>) => void;
};

export function InputBox({ type, id, name, placeholder, autoFocus, onChange, onKeyPress }: InputBoxProps) {
  return (
    <Input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      autoFocus={autoFocus}
      onChange={onChange}
      onKeyPress={onKeyPress}
    />
  );
}

const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 22px;
  border-radius: 15px;
  border: 1px solid ${styleToken.color.gray4};
  color: ${styleToken.color.gray2};
  font-size: 17px;
  outline: none;
  cursor: pointer;

  ::placeholder {
    color: ${styleToken.color.gray4};
  }
`;
