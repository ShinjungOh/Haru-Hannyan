import styled from '@emotion/styled';
import { styleToken } from '@ui/styles';
import { Typography } from '@ui/components/common';
import { FEELING_CAT_TYPE } from '@lib/const/imageSrc';

type TodayFeelingProps = {
  onClick: (feeling: string) => void;
};

export function TodayFeeling({ onClick }: TodayFeelingProps) {
  return (
    <Container>
      <FeelingContainer>
        <Typography variant="subtitle4" color={styleToken.color.gray2}>
          오늘은 어떤 고양이인가요?
        </Typography>
        <FeelingCatList>
          <>
            {FEELING_CAT_TYPE.map((feelingCat, index) => (
              <FeelingItem key={feelingCat.feeling} onClick={() => onClick(feelingCat.feeling)}>
                <img key={index} src={feelingCat.url} alt={feelingCat.feeling} id={feelingCat.feeling} />
              </FeelingItem>
            ))}
          </>
        </FeelingCatList>
      </FeelingContainer>
      <Triangle />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 920px;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: ${styleToken.color.gray3}80;
  z-index: 1;
`;

const FeelingContainer = styled.div`
  position: absolute;
  bottom: 124px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 16px 14px 16px 14px;
  width: 80%;
  height: auto;
  border-radius: 15px;
  background-color: white;
`;

const Triangle = styled.div`
  position: absolute;
  bottom: 103px;
  left: 50%;
  border-left: 18px solid transparent;
  border-right: 18px solid transparent;
  border-bottom: 22px solid white;
  transform: translateX(-50%) rotate(180deg);
`;

const FeelingCatList = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

const FeelingItem = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }
`;
