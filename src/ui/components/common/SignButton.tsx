import styled from '@emotion/styled';
import { styleToken } from '@ui/styles';

type SignButtonProps = {
  text: string;
  imgSrc?: string;
  onClick?: () => void;
  disabled?: boolean;
  backgroundColor: string;
  color: string;
};

export function SignButton({ text, imgSrc, onClick, disabled, backgroundColor, color }: SignButtonProps) {
  return (
    <Button type="button" onClick={onClick} disabled={disabled} backgroundColor={backgroundColor} color={color}>
      {imgSrc && <img src={imgSrc} alt="버튼 아이콘" />}
      {text}
    </Button>
  );
}

const Button = styled.button<{ backgroundColor: string; color: string }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 54px;
  min-height: 54px;
  border-radius: 15px;
  border: none;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;

  img {
    width: 20px;
    height: 20px;
    margin-top: 0;
    margin-right: 6px;
  }

  &:disabled {
    background-color: ${styleToken.color.gray5};
    color: ${styleToken.color.white};
    cursor: not-allowed;
  }
`;
