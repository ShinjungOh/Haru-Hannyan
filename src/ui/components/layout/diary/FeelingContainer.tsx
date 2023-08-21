import { FeelingCatTypeSrc } from '@lib/const/ImageSrc';
import styled from '@emotion/styled';
import styleTokenCss from '@ui/styles/styleToken.css';
import { Feeling } from '@lib/types/diary.type';

type FeelingContainerProps = {
  diary: any;
  onClick: (feeling: Feeling) => void;
};

export default function FeelingContainer({ diary, onClick }: FeelingContainerProps) {
  return (
    <Container>
      <h4>오늘은 어떤 고양이인가요?</h4>
      <FeelingCatList>
        <>
          {FeelingCatTypeSrc.map((el, index) => {
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
  padding: 20px 15px 15px 15px;
  width: 100%;
  height: auto;
  border-radius: 15px;
  background-color: white;
  border: 1px solid ${styleTokenCss.color.gray5};
  font-size: 14px;

  h4 {
    font-weight: 600;
    color: ${styleTokenCss.color.gray3};
  }
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
