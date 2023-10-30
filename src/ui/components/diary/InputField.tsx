import styled from '@emotion/styled';
import { styleToken } from '@ui/styles';
import { PropsWithChildren } from 'react';

type InputFieldProps = {
  id: string;
  onClick: () => void;
};

export function InputField({ id, onClick, children }: InputFieldProps & PropsWithChildren) {
  return (
    <InputContainer id={id} onClick={onClick}>
      {children}
    </InputContainer>
  );
}

const InputContainer = styled.div`
  white-space: pre-wrap;
  overflow-y: auto;
  max-height: 200px;
  width: 100%;
  height: auto;
  padding: 6px;
  margin-top: 14px;
  border-radius: 8px;
  border: none;
  color: ${styleToken.color.gray3};
  font-size: 12px;
  outline: 0;
  cursor: pointer;
`;
