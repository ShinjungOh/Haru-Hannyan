import styled from '@emotion/styled';
import { styleToken } from '@ui/styles';
import { PropsWithChildren } from 'react';

type EmptyInputFieldProps = {
  id: string;
  onClick: () => void;
};

export function EmptyInputField({ id, onClick, children }: EmptyInputFieldProps & PropsWithChildren) {
  return (
    <EmptyInputContainer id={id} onClick={onClick}>
      {children}
    </EmptyInputContainer>
  );
}

const EmptyInputContainer = styled.div`
  white-space: pre-wrap;
  overflow-y: auto;
  max-height: 200px;
  width: 100%;
  height: auto;
  padding: 16px;
  margin-top: 14px;
  border-radius: 8px;
  border: none;
  color: ${styleToken.color.gray3};
  background-color: ${styleToken.color.gray5};
  font-size: 12px;
  outline: 0;
  cursor: pointer;

  ::placeholder {
    color: ${styleToken.color.gray3};
  }
`;
