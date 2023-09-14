import styled from '@emotion/styled';
import { confirmModalTypeSrc } from '@lib/const/confirmModalSrc';
import { BaseButton, Typography } from '@ui/components/common';
import { styleToken } from '@ui/styles';

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
        <Typography variant="h4" color={styleToken.color.gray1}>
          {title}
        </Typography>
        <Typography variant="subtitle3" color={styleToken.color.gray2} style={{ marginTop: '5px' }}>
          {description}
        </Typography>
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
  width: 70px;
  height: 70px;

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
