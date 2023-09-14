import styled from '@emotion/styled';
import { alertModalTypeSrc } from '@lib/const/alertModalSrc';
import { BaseButton, Typography } from '@ui/components/common';
import { styleToken } from '@ui/styles';

export type AlertModalType = 'success' | 'danger' | 'info';

type ConfirmModalProps = {
  type: AlertModalType;
  title: string;
  onSubmit?: (result: unknown) => void;
};

export function AlertModal({ type, title, onSubmit }: ConfirmModalProps) {
  const imgSrc = alertModalTypeSrc[type].imageSrc;

  const handleSubmit = () => {
    onSubmit?.(true);
  };

  return (
    <Container>
      <AlertImage>
        <img src={imgSrc} alt="alert" />
      </AlertImage>
      <AlertMessage>
        <Typography variant="subtitle2" color={styleToken.color.gray1} fontWeight={styleToken.font.weightBold}>
          {title}
        </Typography>
      </AlertMessage>
      <ButtonContainer>
        <BaseButton
          colorTheme={type}
          height="50px"
          onClick={handleSubmit}
          style={{ borderRadius: '8px', fontSize: '16px' }}
        >
          확인
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
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 22px;
  width: 100%;
`;
