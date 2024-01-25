import styled from '@emotion/styled';
import { CONFIRM_MODAL_TYPE } from '@lib/const/confirmModalSrc';
import { BaseButton, Typography } from '@ui/components/common';
import { styleToken } from '@ui/styles';
import { useEffect } from 'react';

export type ConfirmModalType = 'out' | 'success' | 'delete';

type ConfirmModalProps = {
  type: ConfirmModalType;
  title: string;
  description: string;
  onClose?: () => void;
  onSubmit?: (result: unknown) => void;
};

export function ConfirmModal({ type, title, description, onClose, onSubmit }: ConfirmModalProps) {
  const imgSrc = CONFIRM_MODAL_TYPE[type].imageSrc;
  const btnText = CONFIRM_MODAL_TYPE[type].buttonText;
  const btnTheme = type === 'success' ? 'success' : 'danger';

  const handleClose = () => {
    onClose?.();
  };

  const handleSubmit = () => {
    onSubmit?.(true);
  };

  useEffect(() => {
    const handleOnKeyPressESC = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    const handleOnKeyPressEnter = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        handleSubmit();
      }
    };

    window.addEventListener('keydown', handleOnKeyPressESC);
    window.addEventListener('keydown', handleOnKeyPressEnter);
    return () => {
      window.removeEventListener('keydown', handleOnKeyPressESC);
      window.removeEventListener('keydown', handleOnKeyPressEnter);
    };
  }, []);

  return (
    <Container>
      <ConfirmImage>
        <img src={imgSrc} alt={btnText} />
      </ConfirmImage>
      <ConfirmMessage>
        <Typography variant="subtitle1" color={styleToken.color.gray1}>
          {title}
        </Typography>
        <Typography variant="subtitle3" color={styleToken.color.gray2} style={{ marginTop: '10px' }}>
          {description}
        </Typography>
      </ConfirmMessage>
      <ButtonContainer>
        <BaseButton
          colorTheme="light"
          height="44px"
          onClick={handleClose}
          style={{ borderRadius: '8px', fontSize: '16px' }}
        >
          취소
        </BaseButton>
        <BaseButton
          colorTheme={btnTheme}
          height="44px"
          onClick={handleSubmit}
          style={{ borderRadius: '8px', fontSize: '16px' }}
        >
          {btnText}
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
  width: 280px;
  height: auto;
  padding: 22px;
  border-radius: 15px;
  z-index: 2;
  background-color: ${styleToken.color.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ConfirmImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: auto;
  margin: 4px;

  img {
    width: 50px;
  }
`;

const ConfirmMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  margin-top: 10px;
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
