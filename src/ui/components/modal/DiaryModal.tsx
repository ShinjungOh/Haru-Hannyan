import styled from '@emotion/styled';
import styleToken from '@ui/styles/styleToken.css';
import { ChangeEvent, useEffect, useRef, useState } from 'react';

type ModalProps = {
  diaryText: string;
  onClose?: () => void;
  onSubmit?: (result: unknown) => void;
};

export default function DiaryModal({ diaryText, onClose, onSubmit }: ModalProps) {
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

  return (
    <Container>
      <TextContainer
        placeholder="내용을 입력해 주세요"
        value={modalInput}
        onChange={handleChangeModalInput}
        ref={textareaRef}
      />
      <ButtonContainer>
        <button
          type="button"
          style={{ color: styleToken.color.gray2, backgroundColor: styleToken.color.gray4 }}
          onClick={handleClose}
        >
          취소
        </button>
        <button
          type="button"
          style={{ color: styleToken.color.white, backgroundColor: styleToken.color.alert1 }}
          onClick={handleSubmit}
        >
          작성완료
        </button>
      </ButtonContainer>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 360px;
  height: 370px;
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
  outline: none;
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

  button {
    width: 150px;
    height: 50px;
    border-radius: 8px;
    border: none;
    font-weight: 600;
    font-size: 15px;
    cursor: pointer;
  }
`;
