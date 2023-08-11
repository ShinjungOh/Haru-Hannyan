import styled from '@emotion/styled';
import styleTokenCss from '@ui/styles/styleToken.css';
import { Feeling } from '@lib/types/diary.type';

const FeelingCatTypeSrc = [
  {
    [Feeling.행복]: 'images/icon/calendar/feeling-cat-great.svg',
  },
  {
    [Feeling.좋음]: 'images/icon/calendar/feeling-cat-good.svg',
  },
  {
    [Feeling.보통]: 'images/icon/calendar/feeling-cat-normal.svg',
  },
  {
    [Feeling.나쁨]: 'images/icon/calendar/feeling-cat-bad.svg',
  },
  {
    [Feeling.화남]: 'images/icon/calendar/feeling-cat-angry.svg',
  },
];

export default function TodayFeeling() {
  return (
    <Container>
      <FeelingContainer>
        <div>오늘은 어떤 고양이인가요?</div>
        <FeelingCat>
          {FeelingCatTypeSrc.map((el, index) => (
            <img key={index} src={Object.values(el)[0]} alt="기분 아이콘" />
          ))}
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