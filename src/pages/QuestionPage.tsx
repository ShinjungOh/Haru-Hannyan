import styled from '@emotion/styled';
import { styleToken } from '@ui/styles';
import { ChangeEvent, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router';
import { Body } from '@ui/components/layout';
import { BaseButton, NavigationHeader, Typography } from '@ui/components/common';
import { useAxiosErrorAlert, useConfirm } from '@lib/hooks';
import { ANSWER_TITLE } from '@lib/const/reportQnA';
import { apiGetAnswers, apiGetQuestions, apiPostAnswer } from '../api/report';

export function QuestionPage() {
  const navigate = useNavigate();
  const confirm = useConfirm();
  const axiosErrorAlert = useAxiosErrorAlert();

  const [questions, setQuestions] = useState<[]>([]);
  const [answer, setAnswer] = useState<number[]>([]);

  const isAvailable = useMemo(() => answer.length === 10, [answer]);

  const handleChangeAnswer = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;
    const parseNumberAnswer = Number(value);

    const updatedAnswers = [...answer];
    updatedAnswers[index] = parseNumberAnswer;
    setAnswer(updatedAnswers);
  };

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

  const handleSubmit = async () => {
    try {
      const responsePostAnswer = await apiPostAnswer('stress', answer);

      if (responsePostAnswer.success) {
        const responseGetAnswers = await apiGetAnswers();

        if (responseGetAnswers.success && responseGetAnswers.data) {
          const id = responseGetAnswers.data.answers[0].answer_id;
          navigate(`/report/answer/${id}`);
        }
      }
    } catch (e) {
      await axiosErrorAlert(e);
    }
  };

  useEffect(() => {
    const getQuestionList = async () => {
      try {
        const responseGetQuestions = await apiGetQuestions();

        if (responseGetQuestions.success && responseGetQuestions.data) {
          const isQuestions = responseGetQuestions.data.question;
          setQuestions(isQuestions);
        }
      } catch (e) {
        await axiosErrorAlert(e);
      }
    };

    getQuestionList();
  }, []);

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
        {questions &&
          questions.map((question: any, questionIndex: number) => (
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
                <>
                  {ANSWER_TITLE.map((answer) => (
                    <Radio key={answer.text}>
                      <input
                        type="radio"
                        name={`question-${questionIndex}`}
                        value={answer.score}
                        onChange={(e) => handleChangeAnswer(e, questionIndex)}
                      />
                      <i />
                      <Typography variant="body4" style={{ marginTop: 8 }}>
                        {answer.text}
                      </Typography>
                    </Radio>
                  ))}
                </>
              </AnswerContainer>
            </QuestionContainer>
          ))}
        <BaseButton
          colorTheme="primary"
          height="68px"
          minHeight="68px"
          onClick={handleSubmit}
          style={{ marginTop: 30 }}
          disabled={!isAvailable}
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
