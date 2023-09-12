import styled from '@emotion/styled';
import styleTokenCss from '@ui/styles/styleToken.css';
import { feelingCatTypeSrc } from '@lib/const/imageSrc';

type TodayFeelingProps = {
  onClick: (feeling: string) => void;
};

export function TodayFeeling({ onClick }: TodayFeelingProps) {
  return (
    <Container>
      <FeelingContainer>
        <div>오늘은 어떤 고양이인가요?</div>
        <FeelingCat>
          <>
            {feelingCatTypeSrc.map((el, index) => (
              <img key={index} src={el.url} alt={el.feeling} onClick={() => onClick(el.feeling)} />
            ))}
          </>
        </FeelingCat>
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
  background-color: ${styleTokenCss.color.gray3}80;
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
  padding: 20px 15px 15px 15px;
  width: 330px;
  height: 100px;
  border-radius: 15px;
  background-color: white;

  div {
    font-size: 14px;
    font-weight: 600;
    color: ${styleTokenCss.color.gray3};
  }
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

const FeelingCat = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    margin: 8px;
  }
`;
