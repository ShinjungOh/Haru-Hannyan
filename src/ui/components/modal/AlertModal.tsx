import styled from '@emotion/styled';
import { ALERT_MODAL_TYPE } from '@lib/const/alertModalSrc';
import { BaseButton, Typography } from '@ui/components/common';
import { styleToken } from '@ui/styles';
import { useEffect } from 'react';

export type AlertModalType = 'success' | 'danger' | 'info';

type AlertModalProps = {
  type: AlertModalType;
  title: string;
  onSubmit?: (result: unknown) => void;
};

export function AlertModal({ type, title, onSubmit }: AlertModalProps) {
  const imgSrc = ALERT_MODAL_TYPE[type].imageSrc;

  const handleSubmit = () => {
    onSubmit?.(true);
  };

  useEffect(() => {
    const handleOnKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Enter') {
        e.preventDefault();
        handleSubmit();
      }
    };

    window.addEventListener('keydown', handleOnKeyPress);
    return () => {
      window.removeEventListener('keydown', handleOnKeyPress);
    };
  }, []);

  return (
    <Container>
      <AlertImage>
        <img src={imgSrc} alt="alert" />
      </AlertImage>
      <AlertMessage>
        <Typography variant="body1" color={styleToken.color.gray1}>
          {title}
        </Typography>
      </AlertMessage>
      <ButtonContainer>
        <BaseButton
          colorTheme={type}
          height="44px"
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
  padding: 0 10px 8px 10px;

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
