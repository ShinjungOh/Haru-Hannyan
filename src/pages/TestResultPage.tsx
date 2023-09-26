import styled from '@emotion/styled';
import { useNavigate } from 'react-router';
import { BaseButton, NavigationHeader, Typography } from '@ui/components/common';
import { Body } from '@ui/components/layout';
import { PATH } from '@lib/const/path';
import { styleToken } from '@ui/styles';

export function TestResultPage() {
  const navigate = useNavigate();

  const handlePageNewTest = () => {
    navigate('/report/question');
  };

  const handlePageTestResult = () => {
    navigate('/');
  };

  const handlePageBack = () => {
    navigate(PATH.REPORT);
  };

  return (
    <>
      <NavigationHeader title="스트레스 측정하기" isBack onBack={handlePageBack} />
      <Container>
        <InfoContainer>
          <Typography variant="subtitle3" fontWeight={600}>
            나의 스트레스 결과
          </Typography>
          <Typography variant="h1" color={styleToken.color.primary} fontWeight={600} style={{ margin: 20 }}>
            31점
          </Typography>
          <Typography variant="body4" style={{ marginBottom: 14 }}>
            극심한 스트레스 상태로 보여집니다. 스트레스를 풀만한 여유가 없이 계속 쌓이게 되면, 시간이 지나면서
            줄어들기보다는, 몸과 마음을 언제 갑자기 무너뜨리게 될지 모르는 시한폭탄과도 같습니다. 조속한 시일내에
            전문가의 도움을 받아보실 것을 권해드립니다.
          </Typography>
        </InfoContainer>
        <InfoContainer style={{ marginTop: 20 }}>
          <Typography variant="subtitle3" fontWeight={600}>
            스트레스 점수표
          </Typography>
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
              <Typography
                variant="body2"
                color={styleToken.color.alert_danger}
                fontWeight={600}
                style={{ lineHeight: 1.6 }}
              >
                위험
              </Typography>
              <Typography variant="body2" color={styleToken.color.primary} fontWeight={600} style={{ lineHeight: 1.6 }}>
                중증
              </Typography>
              <Typography
                variant="body2"
                color={styleToken.color.alert_success}
                fontWeight={600}
                style={{ lineHeight: 1.6 }}
              >
                경도
              </Typography>
              <Typography variant="body2" fontWeight={600} style={{ lineHeight: 1.6 }}>
                정상
              </Typography>
            </ScoreList>
          </ScoreContainer>
        </InfoContainer>
        <ButtonContainer>
          <BaseButton colorTheme="info" onClick={handlePageNewTest}>
            새로 검사하기
          </BaseButton>
          <BaseButton colorTheme="info" onClick={handlePageTestResult} style={{ marginTop: 22 }}>
            이전 검사결과 보기
          </BaseButton>
        </ButtonContainer>
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
`;

const ScoreList = styled.div`
  // border: 1px solid ${styleToken.color.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 40%;
  height: auto;
`;

const ButtonContainer = styled.div`
  margin-top: 46px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 116px;
`;
