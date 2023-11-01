import styled from '@emotion/styled';
import { styleToken } from '@ui/styles';
import { Typography } from '@ui/components/common';
import { FeelingItem } from '@ui/components/diary/FeelingItem';
import { FEELING_CAT_TYPE } from '@lib/const/imageSrc';
import { Diary, Feeling, NewDiary } from '@lib/types';

type FeelingContainerProps = {
  diary: NewDiary | Diary;
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
          {FEELING_CAT_TYPE.map((el) => {
            const isSelected = el.feeling === diary.feel;

            return (
              <FeelingItem
                key={el.feeling}
                feeling={el.feeling}
                imgSrc={el.url}
                isSelected={isSelected}
                onClick={onClick}
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
  margin-top: 12px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
