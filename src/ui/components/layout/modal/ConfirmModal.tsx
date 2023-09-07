import styled from '@emotion/styled';
import styleToken from '@ui/styles/styleToken.css';
import { modalTypeSrc } from '@lib/const/confirmModalSrc';

export type ConfirmModalType = 'out' | 'success';

type ConfirmModalProps = {
  type: ConfirmModalType;
  title: string;
  description: string;
  onClose?: () => void;
  onSubmit?: (result: unknown) => void;
};

export default function ConfirmModal({ type, title, description, onClose, onSubmit }: ConfirmModalProps) {
  const imgSrc = modalTypeSrc[type].imageSrc;
  const btnText = modalTypeSrc[type].buttonText;

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
        <button
          type="button"
          style={{ color: styleToken.color.gray2, backgroundColor: styleToken.color.gray4 }}
          onClick={handleClose}
        >
          취소
        </button>
        <button
          type="button"
          style={{ color: styleToken.color.white, backgroundColor: styleToken.color.alert2 }}
          onClick={handleSubmit}
        >
          {btnText}
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
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 22px;
  width: 100%;

  button {
    width: 110px;
    height: 50px;
    border-radius: 8px;
    border: none;
    font-weight: 600;
    font-size: 15px;
    cursor: pointer;
  }
`;
