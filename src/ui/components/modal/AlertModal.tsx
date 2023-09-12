import styled from '@emotion/styled';
import styleToken from '@ui/styles/styleToken.css';
import { alertModalTypeSrc } from '@lib/const/alertModalSrc';

export type AlertModalType = 'success' | 'danger' | 'info';

type ConfirmModalProps = {
  type: AlertModalType;
  title: string;
  onSubmit?: (result: unknown) => void;
};

export function AlertModal({ type, title, onSubmit }: ConfirmModalProps) {
  const imgSrc = alertModalTypeSrc[type].imageSrc;
  const buttonColor = alertModalTypeSrc[type].color;

  const handleSubmit = () => {
    onSubmit?.(true);
  };

  return (
    <Container>
      <AlertImage>
        <img src={imgSrc} alt="alert" />
      </AlertImage>
      <AlertMessage>
        <h2>{title}</h2>
      </AlertMessage>
      <ButtonContainer>
        <button
          type="button"
          style={{ color: styleToken.color.white, backgroundColor: buttonColor }}
          onClick={handleSubmit}
        >
          확인
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
  width: auto;
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

const AlertImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 0 10px 10px 10px;

  img {
    width: 38px;
  }
`;

const AlertMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  margin-top: 10px;
  width: 210px;
  font-weight: 600;
  line-height: 1.3;

  h2 {
    color: ${styleToken.color.gray1};
    font-size: 18px;
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

  button {
    width: 100%;
    height: 50px;
    border-radius: 8px;
    border: none;
    font-weight: 600;
    font-size: 15px;
    cursor: pointer;
  }
`;
