import styled from '@emotion/styled';
import styleToken from '@ui/styles/styleToken.css';

type ConfirmModalProps = {
  title: string;
  description: string;
  onBack: () => void;
  onClose: () => void;
  onSubmit: (result: unknown) => void;
};

export default function ConfirmModal({ title, description, onBack, onClose, onSubmit }: ConfirmModalProps) {
  const handleSubmit = () => {
    onSubmit(null);
    onBack();
  };

  return (
    <div>
      <Container>
        <ConfirmImage>
          <img src="/images/icon/alert.svg" alt="alert" />
        </ConfirmImage>
        <ConfirmMessage>
          <h2>{title}</h2>
          <h4>{description}</h4>
        </ConfirmMessage>
        <ButtonContainer>
          <button
            type="button"
            style={{ color: styleToken.color.gray2, backgroundColor: styleToken.color.gray4 }}
            onClick={onClose}
          >
            취소
          </button>
          <button
            type="button"
            style={{ color: styleToken.color.white, backgroundColor: styleToken.color.alert2 }}
            onClick={handleSubmit}
          >
            나가기
          </button>
        </ButtonContainer>
      </Container>
    </div>
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
  border: 1px solid ${styleToken.color.gray2};
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
