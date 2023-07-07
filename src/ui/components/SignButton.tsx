import styleTokenCss from '@ui/styles/styleToken.css';
import styled from '@emotion/styled';

type SignButtonProps = {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
};

export default function SignButton({ text, onClick, disabled }: SignButtonProps) {
  return (
    <Button type="button" onClick={onClick} disabled={disabled}>
      {text}
    </Button>
  );
}

const Button = styled.button`
  width: 100%;
  height: 71px;
  min-height: 65px;
  border-radius: 15px;
  border: none;
  background-color: ${styleTokenCss.color.subActive};
  color: ${styleTokenCss.color.white};
  font-size: 17px;
  font-weight: 600;
  cursor: pointer;

  &:disabled {
    background-color: ${styleTokenCss.color.gray5};
    color: ${styleTokenCss.color.white};
    cursor: not-allowed;
  }
`;
