import { feelingCatTypeSrc } from '@lib/const/imageSrc';
import styled from '@emotion/styled';
import { Feeling } from '@lib/types';
import { styleToken } from '@ui/styles';
import { Typography } from '@ui/components/common';

type FeelingContainerProps = {
  diary: any;
  onClick: (feeling: Feeling) => void;
};

export function FeelingContainer({ diary, onClick }: FeelingContainerProps) {
  return (
    <Container>
      <Typography variant="subtitle4" color={styleToken.color.gray3}>
        오늘은 어떤 고양이인가요?
      </Typography>
      <FeelingCatList>
        <>
          {feelingCatTypeSrc.map((el, index) => {
            const isSelected = el.feeling === diary.feel;
            return (
              <FeelingCatImage
                key={index}
                src={el.url}
                alt={el.feeling}
                isSelected={isSelected}
                onClick={() => onClick(el.feeling)}
              />
            );
          })}
        </>
      </FeelingCatList>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  width: 100%;
  height: auto;
  border-radius: 15px;
  background-color: white;
  border: 1px solid ${styleToken.color.gray5};
`;

const FeelingCatList = styled.div`
  margin-top: 13px;
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const FeelingCatImage = styled.img<{ isSelected: boolean }>`
  width: 100%;
  height: 100%;
  opacity: ${(props) => (props.isSelected ? '100%' : '45%')};

  :hover {
    opacity: 100%;
  }
`;
