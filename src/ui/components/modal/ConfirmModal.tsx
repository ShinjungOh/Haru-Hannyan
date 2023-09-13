import styled from '@emotion/styled';
import styleToken from '@ui/styles/styleToken.css';
import { confirmModalTypeSrc } from '@lib/const/confirmModalSrc';
import { BaseButton } from '@ui/components/common';

export type ConfirmModalType = 'out' | 'success' | 'delete';

type ConfirmModalProps = {
  type: ConfirmModalType;
  title: string;
  description: string;
  onClose?: () => void;
  onSubmit?: (result: unknown) => void;
};

export function ConfirmModal({ type, title, description, onClose, onSubmit }: ConfirmModalProps) {
  const imgSrc = confirmModalTypeSrc[type].imageSrc;
  const btnText = confirmModalTypeSrc[type].buttonText;

  const handleClose = () => {
    onClose?.();
  };

  const handleSubmit = () => {
    onSubmit?.(true);
  };

  return (
    <Container>
      <ConfirmImage>
        <img src={imgSrc} alt={btnText} />
      </ConfirmImage>
      <ConfirmMessage>
        <h2>{title}</h2>
        <h4>{description}</h4>
      </ConfirmMessage>
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
          colorTheme="danger"
          height="50px"
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
  width: 80px;
  height: 80px;

  img {
    width: 60px;
  }
`;

const ConfirmMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  margin-top: 18px;
  width: 210px;
  height: 80px;
  font-weight: 600;
  line-height: 1.3;

  h2 {
    color: ${styleToken.color.gray1};
    font-size: 20px;
  }

  h4 {
    color: ${styleToken.color.gray2};
    font-size: 15px;
    white-space: pre-wrap;
  }
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
