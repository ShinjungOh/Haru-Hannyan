import styled from '@emotion/styled';
import { Typography } from '@ui/components/common';
import { RESULT_DETAIL } from '@lib/const/reportQnA';
import { styleToken } from '@ui/styles';

export function Score() {
  return (
    <InfoContainer style={{ marginTop: 14 }}>
      <Typography variant="subtitle3" fontWeight={600}>
        스트레스 점수표
      </Typography>
      <ScoreContainer>
        <ScoreList>
          <>
            {Object.values(RESULT_DETAIL).map((detail) => (
              <Typography key={detail.score} variant="body3" style={{ lineHeight: 1.8 }}>
                {detail.score}
              </Typography>
            ))}
          </>
        </ScoreList>
        <ScoreList>
          <>
            {Object.values(RESULT_DETAIL).map((detail) => (
              <Typography
                key={detail.score}
                variant="body2"
                color={detail.color}
                fontWeight={600}
                style={{ lineHeight: 1.6 }}
              >
                {detail.title}
              </Typography>
            ))}
          </>
        </ScoreList>
      </ScoreContainer>
    </InfoContainer>
  );
}

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
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

const ScoreContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 20px;
  width: 100%;
  height: auto;
  gap: 30px;
`;

const ScoreList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: auto;
`;
