import styled from '@emotion/styled';
import { Feeling } from '@lib/types';

type FeelingItemProps = {
  feeling: Feeling;
  imgSrc: string;
  isSelected: boolean;
  onClick: (feeling: Feeling) => void;
};

export function FeelingItem({ feeling, imgSrc, isSelected, onClick }: FeelingItemProps) {
  return (
    <Container isSelected={isSelected} onClick={() => onClick(feeling)}>
      <img src={imgSrc} alt={feeling} />
    </Container>
  );
}

const Container = styled.div<{ isSelected: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  img {
    width: 70%;
    height: auto;
    opacity: ${(props) => (props.isSelected ? '100%' : '45%')};

    :hover {
      opacity: 100%;
    }
  }
`;
