import styled from '@emotion/styled';
import { Typography } from '@ui/components/common';
import { RESULT_DETAIL } from '@lib/const/reportQnA';

export function Score() {
  return (
    <ScoreContainer>
      <ScoreList>
        <>
          {Object.values(RESULT_DETAIL).map((detail) => (
            <Typography variant="body3" style={{ lineHeight: 1.8 }}>
              {detail.score}
            </Typography>
          ))}
        </>
      </ScoreList>
      <ScoreList>
        <>
          {Object.values(RESULT_DETAIL).map((detail) => (
            <Typography variant="body2" color={detail.color} fontWeight={600} style={{ lineHeight: 1.6 }}>
              {detail.title}
            </Typography>
          ))}
        </>
      </ScoreList>
    </ScoreContainer>
  );
}

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
