import styled from '@emotion/styled';
import { styleToken } from '@ui/styles';
import { Typography } from '@ui/components/common';

export function Score() {
  return (
    <ScoreContainer>
      <ScoreList>
        <Typography variant="body3" style={{ lineHeight: 1.8 }}>
          23 ~ 40점
        </Typography>
        <Typography variant="body3" style={{ lineHeight: 1.8 }}>
          22 ~ 17점
        </Typography>
        <Typography variant="body3" style={{ lineHeight: 1.8 }}>
          16 ~ 14점
        </Typography>
        <Typography variant="body3" style={{ lineHeight: 1.8 }}>
          13 ~ 0점
        </Typography>
      </ScoreList>
      <ScoreList>
        <Typography variant="body2" color={styleToken.color.alert_danger} fontWeight={600} style={{ lineHeight: 1.6 }}>
          위험
        </Typography>
        <Typography variant="body2" color={styleToken.color.primary} fontWeight={600} style={{ lineHeight: 1.6 }}>
          중증
        </Typography>
        <Typography variant="body2" color={styleToken.color.alert_success} fontWeight={600} style={{ lineHeight: 1.6 }}>
          경도
        </Typography>
        <Typography variant="body2" fontWeight={600} style={{ lineHeight: 1.6 }}>
          정상
        </Typography>
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
