import styled from '@emotion/styled';
import styleToken from '@ui/styles/styleToken.css';
import { OverlaySubmitResult } from '@ui/components/layout/overlay/OverlayProvider';
import { cloneElement, PropsWithChildren } from 'react';

type OverlayProps = {
  onClose: () => void;
  onSubmit: (result: OverlaySubmitResult) => void;
  onClickOverlayClose: boolean;
  children: PropsWithChildren;
};

export default function Overlay({ onClose, onSubmit, onClickOverlayClose, children }: OverlayProps) {
  const handleBackDropClick = () => {
    if (onClickOverlayClose) {
      onClose();
    }
  };

  return (
    <BackDrop onClick={handleBackDropClick}>
      <OverlayContainer>
        <>
          {children &&
            cloneElement(children, {
              onClose,
              onSubmit,
            })}
        </>
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
`;
