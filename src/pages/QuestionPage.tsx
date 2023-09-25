import styled from '@emotion/styled';
import { styleToken } from '@ui/styles';
import { useNavigate } from 'react-router';
import { Body } from '@ui/components/layout';
import { BaseButton, NavigationHeader, Typography } from '@ui/components/common';
import { useConfirm } from '@lib/hooks';
import { PATH } from '@lib/const/path';

const QuestionDummy = [
  {
    seq: 1,
    text: '어려운 일들이 너무 많이 쌓여서 극복하지 못할 것 같은 느낌을 얼마나 자주 경험했나요?',
  },
  {
    seq: 2,
    text: '컨디션이 매우 좋다고 느껴지는 순간이 얼마나 자주 있었나요?',
  },
  {
    seq: 3,
    text: '꼭 해야하는 일을 처리할 수 없다고 생각한 적이 얼마나 있었나요?',
  },
  {
    seq: 4,
    text: '개인적인 문제를 다루는 일에 얼마나 자주 자신감을 느꼈나요?',
  },
  {
    seq: 5,
    text: '인생에서 중요한 일을 조절할 수 없다는 느낌을 얼마나 자주 받았나요?',
  },
  {
    seq: 6,
    text: '예상치 못한 일 때문에 당황했던 적이 얼마나 있었나요?',
  },
  {
    seq: 7,
    text: '신경이 예민해지고, 스트레스를 받고 있다는 느낌을 얼마나 경험했나요?',
  },
  {
    seq: 8,
    text: '일상이 나의 생각대로 진행되고 있다는 느낌을 얼마나 느꼈나요?',
  },
  {
    seq: 9,
    text: '일상생활의 짜증을 얼마나 자주 잘 다스릴 수 있었나요?',
  },
  {
    seq: 10,
    text: '본인이 통제할 수 없는 일 때문에 화가 난 경험이 얼마나 있었나요?',
  },
];

const AnswerTitle = [
  {
    score: 0,
    text: '전혀 아님',
  },
  {
    score: 1,
    text: '거의 아님',
  },
  {
    score: 2,
    text: '보통',
  },
  {
    score: 3,
    text: '자주 있음',
  },
  {
    score: 4,
    text: '매일',
  },
];

export function QuestionPage() {
  const navigate = useNavigate();
  const confirm = useConfirm();

  const isValidate = true;

  const handlePageBack = async () => {
    const responseConfirm = await confirm(
      {
        type: 'out',
        title: '스트레스 측정하기',
        description: '검사가 완료되지 않았어요.\n그래도 나가시겠어요?',
      },
      { clickOverlayClose: true },
    );

    if (responseConfirm) {
      navigate(-1);
    }
  };

  const handleSubmit = () => {
    if (isValidate) {
      navigate(PATH.RESULT);
    }
  };

  return (
    <>
      <NavigationHeader title="스트레스 측정하기" isBack onBack={handlePageBack} />
      <Container>
        <InfoContainer>
          <Typography variant="subtitle4" fontWeight={400}>
            최근
            <Typography variant="subtitle4" color={styleToken.color.gray1} fontWeight={600}>
              {' '}
              일주일{' '}
            </Typography>
            동안 질문의 상태를
            <br /> 얼마나 자주 겪었는지 선택해 주세요.
          </Typography>
        </InfoContainer>
        {QuestionDummy.map((question, questionIndex) => (
          <QuestionContainer key={question.text}>
            <QuestionTitle>
              <Typography variant="body4" fontWeight={600}>
                {question.seq}.
              </Typography>
              <Typography variant="body4" fontWeight={600}>
                {question.text}
              </Typography>
            </QuestionTitle>
            <AnswerContainer>
              {AnswerTitle.map((answer) => (
                <Radio key={answer.text}>
                  <input type="radio" name={`question-${questionIndex}`} value={answer.text} />
                  <i />
                  <Typography variant="body4" style={{ marginTop: 8 }}>
                    {answer.text}
                  </Typography>
                </Radio>
              ))}
            </AnswerContainer>
          </QuestionContainer>
        ))}
        <BaseButton
          colorTheme="primary"
          height="68px"
          minHeight="68px"
          onClick={handleSubmit}
          style={{ marginTop: 30 }}
        >
          결과보기
        </BaseButton>
      </Container>
    </>
  );
}

const Container = styled(Body)`
  overflow-y: auto;
  padding: 5px 34px 15px 34px;
  width: 100%;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 22px;
  height: auto;
  margin-bottom: 6px;
  background-color: white;
  border-radius: 15px;
  border: 1px solid ${styleToken.color.gray5};
`;

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 22px 22px 12px 22px;
  height: auto;
  margin-top: 14px;
  background-color: ${styleToken.color.white}50;
  border-radius: 15px;
  border: 1px solid ${styleToken.color.gray5};
  gap: 16px;
`;

const QuestionTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 6px;
`;

const AnswerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

const Radio = styled.label`
  width: 50px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;

  i {
    position: relative;
    display: inline-block;
    height: 36px;
    width: 36px;
    outline: 0;
    background: ${styleToken.color.white};
    border: 1px solid ${styleToken.color.gray4};
    border-radius: 50%;
  }

  input {
    visibility: hidden;
    vertical-align: middle;
    position: absolute;
    height: 100%;
  }

  input[type='radio']:checked + i {
    background-color: ${styleToken.color.secondary};
    border: unset;
  }

  input[type='radio']:checked + i:before {
    content: '';
    display: block;
    position: absolute;
    top: 20%;
    left: 55%;
    transform: rotate(-45deg) translate(-50%, -50%);
    width: 49%;
    height: 30%;
    border-bottom: 2px solid ${styleToken.color.white};
    border-left: 2px solid ${styleToken.color.white};
  }
`;
