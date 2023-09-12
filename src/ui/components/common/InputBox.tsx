import styleTokenCss from '@ui/styles/styleToken.css';
import styled from '@emotion/styled';
import { ChangeEvent } from 'react';

type InputBoxProps = {
  type: string;
  id: string;
  name: string;
  placeholder: string;
  autoFocus?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function InputBox({ type, id, name, placeholder, autoFocus, onChange }: InputBoxProps) {
  return <Input type={type} id={id} name={name} placeholder={placeholder} autoFocus={autoFocus} onChange={onChange} />;
}

const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 22px;
  border-radius: 15px;
  border: 1px solid ${styleTokenCss.color.gray4};
  color: ${styleTokenCss.color.gray2};
  font-size: 17px;
  outline: none;
  cursor: pointer;

  ::placeholder {
    color: ${styleTokenCss.color.gray4};
  }
`;
