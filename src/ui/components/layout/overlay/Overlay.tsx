import styled from '@emotion/styled';
import styleToken from '@ui/styles/styleToken.css';
import { OverlaySubmitResult } from '@ui/components/layout/overlay/OverlayProvider';

type OverlayProps = {
  onClose: () => void;
  onSubmit: (result: OverlaySubmitResult) => void;
};

export default function Overlay({ onClose, onSubmit }: OverlayProps) {
  console.log(onSubmit);

  return (
    <>
      <BackDrop onClick={onClose}>overlay</BackDrop>
    </>
  );
}

const BackDrop = styled.div`
  width: 100px;
  background-color: ${styleToken.color.gray3}50;
`;
