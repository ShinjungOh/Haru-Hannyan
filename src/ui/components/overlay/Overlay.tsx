import styled from '@emotion/styled';
import { PropsWithChildren, MouseEvent } from 'react';
import { styleToken } from '@ui/styles';

type OverlayProps = {
  onClose: () => void;
  onClickOverlayClose: boolean;
};

type Props = PropsWithChildren<OverlayProps>;

export function Overlay({ onClose, onClickOverlayClose, children }: Props) {
  const handleBackDropClick = () => {
    if (onClickOverlayClose) {
      onClose();
    }
  };

  const handleEventStopCapturing = (e: MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <BackDrop onClick={handleBackDropClick}>
      <OverlayContainer onClick={handleEventStopCapturing}>
        <>{children}</>
      </OverlayContainer>
    </BackDrop>
  );
}

const BackDrop = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 440px;
  height: 100%;
  max-height: 920px;
  background-color: ${styleToken.color.gray3}80;
  z-index: 9;
`;

const OverlayContainer = styled.div`
  width: auto;
  border-radius: 8px;
  background-color: ${styleToken.color.white};
  z-index: 100;
`;
