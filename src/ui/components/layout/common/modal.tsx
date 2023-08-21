import styled from '@emotion/styled';
import styleToken from '@ui/styles/styleToken.css';

export default function Modal() {
  const handleClickCancel = () => {
    console.log('cancel');
  };

  const handleClickSubmit = () => {
    console.log('submit');
  };

  return (
    <Container>
      <TextContainer>modal</TextContainer>
      <ButtonContainer>
        <CancelButton onClick={handleClickCancel}>취소</CancelButton>
        <ConfirmButton onClick={handleClickSubmit}>작성완료</ConfirmButton>
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
  border: 1px solid ${styleToken.color.gray2};
  padding: 22px;
  border-radius: 15px;
  background-color: ${styleToken.color.white};
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TextContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  border: 1px solid ${styleToken.color.gray4};
  border-radius: 8px;
  color: ${styleToken.color.gray2};
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 22px;
  width: 100%;
`;

const CancelButton = styled.button`
  width: 150px;
  height: 50px;
  border-radius: 8px;
  border: none;
  background-color: ${styleToken.color.gray4};
  color: ${styleToken.color.gray2};
  font-weight: 600;
  font-size: 15px;
`;

const ConfirmButton = styled.button`
  width: 150px;
  height: 50px;
  border-radius: 8px;
  border: none;
  background-color: ${styleToken.color.alert1};
  color: ${styleToken.color.white};
  font-weight: 600;
  font-size: 15px;
`;
