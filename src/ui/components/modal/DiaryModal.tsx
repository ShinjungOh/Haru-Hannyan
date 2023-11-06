import styled from '@emotion/styled';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { BaseButton } from '@ui/components/common';
import { styleToken } from '@ui/styles';

type ModalProps = {
  diaryText: string;
  onClose?: () => void;
  onSubmit?: (result: unknown) => void;
};

export function DiaryModal({ diaryText, onClose, onSubmit }: ModalProps) {
  const [modalInput, setModalInput] = useState<string>(diaryText || '');
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleChangeModalInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setModalInput(value);
  };

  const handleClose = () => {
    onClose?.();
  };

  const handleSubmit = () => {
    onSubmit?.({ text: modalInput });
    onClose?.();
  };

  useEffect(() => {
    if (textareaRef.current) {
      const inputLength = modalInput.length;
      textareaRef.current?.setSelectionRange(inputLength, inputLength);
      textareaRef.current?.focus();
    }
  }, [textareaRef]);

  useEffect(() => {
    const handleOnKeyPressESC = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleOnKeyPressESC);
    return () => {
      window.removeEventListener('keydown', handleOnKeyPressESC);
    };
  }, []);

  return (
    <Container>
      <TextContainer
        placeholder="내용을 입력해 주세요"
        value={modalInput}
        onChange={handleChangeModalInput}
        ref={textareaRef}
      />
      <ButtonContainer>
        <BaseButton
          colorTheme="light"
          height="50px"
          onClick={handleClose}
          style={{ borderRadius: '8px', fontSize: '16px' }}
        >
          취소
        </BaseButton>
        <BaseButton
          colorTheme="primary"
          height="50px"
          onClick={handleSubmit}
          style={{ borderRadius: '8px', fontSize: '15px' }}
        >
          작성완료
        </BaseButton>
      </ButtonContainer>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 360px;
  height: 50%;
  max-height: 370px;
  padding: 22px;
  border-radius: 15px;
  background-color: ${styleToken.color.white};
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TextContainer = styled.textarea`
  width: 100%;
  height: 100%;
  padding: 20px;
  border: 1px solid ${styleToken.color.gray4};
  border-radius: 8px;
  color: ${styleToken.color.gray2};
  cursor: pointer;
  font-size: 14px;
  outline: 0;
  resize: none;
  overflow-y: auto;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 22px;
  width: 100%;
  gap: 10px;
`;
