import styled from '@emotion/styled';
import { styleToken } from '@ui/styles';
import { Body } from '@ui/components/layout';
import { NavigationHeader, Typography } from '@ui/components/common';

export function PrivacyPolicyPage() {
  return (
    <>
      <NavigationHeader isBack title="개인정보처리방침" />
      <Container>
        <Typography variant="body2">
          <PolicyContainer>
            하루한냥은 관련 법령에 따라 ‘하루한냥’(이하 ‘서비스’)를 이용하는 이용자의 개인정보를 보호하고, 이와 관련한
            고충을 신속하고 원활하게 처리하기 위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다.
          </PolicyContainer>
          <PolicyContainer>
            <Typography variant="body2" fontWeight={600} color={styleToken.color.gray1}>
              제1조(개인정보의 처리 목적)
            </Typography>
            <br />
            <Typography variant="body2">하루한냥은 다음의 목적을 위하여 개인정보를 처리합니다.</Typography>
            <ol>
              <li>
                회원 가입 및 관리: 회원가입의사 확인, 본인 식별인증, 만14세 이상 여부 확인, 회원자격 유지 및 관리,
                서비스 부정이용 방지, 각종 고지통지 등
              </li>
              <li>재화 또는 서비스 제공: 기본/맞춤형 서비스 제공, 계약서청구서 발송, 본인인증 등</li>
              <li>고충처리: 이용자의 신원 확인, 고충사항 확인, 사실조사를 위한 연락통지, 처리결과 통보 등</li>
              <li>마케팅 및 광고에의 활용: 맞춤형 광고 제공, 이벤트 및 광고성 정보 제공 및 참여기회 제공 등</li>
              <li>서비스 개선 및 개발: 기존 서비스 개선 및 신규 서비스, 맞춤형 서비스 개발 등</li>
              <li>가명정보의 활용: 통계작성, 과학적 연구, 공익적 기록보존 등을 위한 가명처리 및 가명정보의 활용</li>
            </ol>
          </PolicyContainer>
          <PolicyContainer>
            <Typography variant="body2" fontWeight={600} color={styleToken.color.gray1}>
              제2조(처리하는 개인정보 항목)
            </Typography>
            <br />
            <Typography variant="body2">
              ① 하루한냥은 서비스 이용자에 대하여 다음의 개인정보항목을 수집하여 처리하고 있습니다.
            </Typography>
            <ol>
              <li>
                회원 가입 시 기본수집사항(필수항목): 로그인 SNS 식별자(Kakao 운영자로부터 제공받은 유저식별자), 프로필
                이름
              </li>
              <li>
                서비스 이용과정에서 자동으로 수집: 기기 정보(모델명, OS), 앱 설정값, 앱 푸시 토큰, 메타 데이터, 서비스
                이용기록
              </li>
              <li>서비스 이용과정에서 회원이 입력: 일기 기분, 일기 감정, 일기 본문 텍스트, 테스트 검사 결과</li>
              <li>
                고충처리 시: 이용자로부터 위 각 정보 중 필요한 항목 및 해당 고충처리에 필요한 별개 항목을 수집 및 처리
              </li>
            </ol>
          </PolicyContainer>
          <PolicyContainer>
            <Typography variant="body2" fontWeight={600} color={styleToken.color.gray1}>
              제3조(개인정보의 처리 및 보유기간)
            </Typography>
            <br />
            <Typography variant="body2">
              ① 하루한냥은 이용자가 서비스를 탈퇴 또는 이용자격을 상실할 경우에는 별도의 요청이 없더라도 수집된 이용자의
              정보를 지체없이 삭제 및 파기합니다. 다만, 회원 탈퇴 또는 이용자격 상실에도 불구하고 다음의 정보에 대해서는
              아래의 이유로 보존합니다.
            </Typography>
            <br />
            <ol>
              <li>관계 법령 위반에 따른 수사조사 등이 진행 중인 경우에는 해당 수사·조사 종료 시까지</li>
              <li>앱 이용에 따른 채권채무관계 잔존 시에는 해당 채권·채무관계 정산 시까지</li>
              <li>
                하루한냥이 이용약관에 따라 서비스 이용계약을 해지한 경우 부정한 재가입 및 서비스 이용을 방지하기 위하여
                해당 이용자의 로그인 SNS 식별자(Kakao 운영자로부터 제공받은 유저식별자)를 서비스 종료 시까지 보관
              </li>
            </ol>
            <Typography variant="body2">
              ② 전항에도 불구하고 하루한냥은 다음의 사유에 해당하는 경우에는 해당 기간 종료 시까지 보존합니다.
            </Typography>
            <br />
            <ol>
              <li>서비스 이용 관련 개인정보 (로그기록): 「통신비밀보호법」상 보존기간인 3개월</li>
              <li>
                계약 또는 청약철회 등에 관한 기록 및 대금결제 및 재화 등의 공급에 관한 기록: 「전자상거래 등에서의
                소비자보호에 관한 법률」상 보존기간인 5년
              </li>
              <li>
                소비자의 불만 또는 분쟁처리에 관한 기록: 「전자상거래 등에서의 소비자보호에 관한 법률」상 보존기간인 3년
              </li>
              <li>표시 광고에 관한 기록: 「전자상거래 등에서의 소비자보호에 관한 법률」상 보존기간인 6개월</li>
              <li>세법이 규정하는 모든 거래에 관한 장부 및 증빙서류: 「국세기본법」상 보존기간인 5년</li>
            </ol>
          </PolicyContainer>
          <PolicyContainer>
            <Typography variant="body2" fontWeight={600} color={styleToken.color.gray1}>
              제4조(개인정보의 제3자 제공)
            </Typography>
            <br />
            <Typography variant="body2">
              ① 하루한냥은 이용자의 동의를 받거나 개인정보 보호법 또는 다른 법률의 특별한 규정이 있는 경우에만
              개인정보를 제3자에게 제공합니다.
              <br />② 하루한냥은 현재 개인정보를 제3자에게 제공하고 있지 않습니다.
            </Typography>
          </PolicyContainer>
          <PolicyContainer>
            <Typography variant="body2" fontWeight={600} color={styleToken.color.gray1}>
              제5조(개인정보처리의 위탁)
            </Typography>
            <br />
            <Typography variant="body2">
              ① 하루한냥은 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.
            </Typography>
            <br />
            <br />
            <table>
              <thead>
                <tr>
                  <th>
                    <Typography variant="body3" fontWeight={600} color={styleToken.color.gray1}>
                      위탁받는 자(수탁자)
                    </Typography>
                  </th>
                  <th>
                    <Typography variant="body3" fontWeight={600} color={styleToken.color.gray1}>
                      위탁하는 업무의 내용
                    </Typography>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Typography variant="body3">엔에이치엔클라우드 주식회사</Typography>
                  </td>
                  <td>
                    <Typography variant="body3">클라우드 서버 운영 및 관리</Typography>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Typography variant="body3">Google Analytics</Typography>
                  </td>
                  <td>
                    <Typography variant="body3">앱 사용 현황 분석, 앱 성능 데이터 수집 및 분석</Typography>
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
            <Typography variant="body2">개인정보의 보유ㆍ이용 기간: 제3조에 기재된 보유ㆍ이용 기간과 일치함</Typography>
          </PolicyContainer>
          <PolicyContainer>
            <Typography variant="body2" fontWeight={600} color={styleToken.color.gray1}>
              제6조(이용자와 법정대리인의 권리·의무 및 행사방법)
            </Typography>
            <br />
            <Typography variant="body2">
              ① 이용자는 하루한냥에 대해 언제든지 개인정보 열람·정정·삭제·처리정지 요구 등의 권리를 행사할 수 있습니다.
              <br />② 제1항에 따른 권리 행사는 서면, 전자우편 등을 통하여 하실 수 있으며, 하루한냥은 이에 대해 지체 없이
              조치하겠습니다.
              <br /> ③ 제1항에 따른 권리 행사는 이용자의 법정대리인이나 위임을 받은 자 등 대리인을 통하여서 하실 수
              있습니다. 이 경우 수임인에 대한 위임사실을 확인할 수 있는 위임장을 제출하셔야 합니다. <br />④ 개인정보
              보호법 등 관계 법령에서 정하는 바에 따라 이용자의 개인정보 열람·정정·삭제·처리정지 요구 등의 권리 행사가
              제한될 수 있습니다. 또한 법령에서 그 개인정보가 수집 대상으로 명시되어 있는 경우에는 그 삭제를 요구할 수
              없습니다.
            </Typography>
          </PolicyContainer>
          <PolicyContainer>
            <Typography variant="body2" fontWeight={600} color={styleToken.color.gray1}>
              제7조(개인정보의 파기)
            </Typography>
            <br />
            ① 하루한냥하루한냥은 하루한냥은 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는
            지체없이 해당 개인정보를 파기합니다. <br />
            ② 이용자로부터 동의 받은 개인정보 보유기간이 경과하거나 처리목적이 달성되었음에도 불구하고 제3조 제2항에
            기재된 법령에 따라 개인정보를 계속 보존하여야 하는 경우에는, 해당 개인정보를 별도의 데이터베이스(DB)로
            옮기거나 보관장소를 달리하여 보존합니다. <br />③ 개인정보 파기의 절차 및 방법은 다음과 같습니다.
            <ol>
              <li>
                파기절차: 하루한냥하루한냥은 하루한냥은 사유가 발생한 개인정보를 선정하고, 하루한냥의 개인정보
                보호책임자의 승인을 받아 개인정보를 파기합니다.
              </li>
              <li>
                파기방법: 하루한냥은 전자적 파일 형태로 기록·저장된 개인정보는 기록을 재생할 수 없도록 기술적 방법을
                이용하여 파기하며, 종이 문서에 기록·저장된 개인정보는 분쇄기로 분쇄하거나 소각하여 파기합니다.
              </li>
            </ol>
          </PolicyContainer>
          <PolicyContainer>
            <Typography variant="body2" fontWeight={600} color={styleToken.color.gray1}>
              제8조(개인정보의 안전성 확보조치)
            </Typography>
            <br />① 하루한냥은 하루한냥은 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.
            <ol>
              <li>관리적 조치: 내부관리계획 수립·시행, 정기적 직원 교육 등</li>
              <li>
                기술적 조치: 해킹 등에 대비한 기술적 대책, 개인정보의 암호화, 개인정보처리시스템의 접근권한 관리,
                접속기록의 보관 및 위변조 방지 등
              </li>
            </ol>
          </PolicyContainer>
          <PolicyContainer>
            <Typography variant="body2" fontWeight={600} color={styleToken.color.gray1}>
              제9조(개인정보 자동 수집 장치의 설치∙운영 및 거부에 관한 사항)
            </Typography>
            <br />
            하루한냥은 이용자의 이용정보를 저장하고 수시로 불러오는 ‘쿠키(cookie)’를 사용하지 않습니다.
          </PolicyContainer>
          <PolicyContainer>
            <Typography variant="body2" fontWeight={600} color={styleToken.color.gray1}>
              제10조(개인정보 보호책임자)
            </Typography>
            <br />① 하루한냥은 개인정보 처리에 관한 업무를 총괄해서 책임지고, 이와 관련한 이용자의 불만처리 및 피해구제
            등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
            <br />
            <br />▶ 개인정보 보호책임자
            <ul>
              <li>성명: 오신정</li>
              <li>직책: 개발자</li>
              <li>연락처: tlswjd9260@gmail.com</li>
            </ul>
          </PolicyContainer>
          <PolicyContainer>
            <Typography variant="body2" fontWeight={600} color={styleToken.color.gray1}>
              제11조(개인정보 처리방침의 변경)
            </Typography>
            <br />
            하루한냥은 법률이나 서비스의 변경사항을 반영하기 위한 목적 등으로 개인정보처리방침을 수정할 수 있습니다.
            개인정보처리방침이 변경되는 경우 하루한냥은 효력발생일 이전에 미리 공지하겠습니다.
          </PolicyContainer>
          <PolicyContainer>
            <Typography variant="body2" fontWeight={600} color={styleToken.color.gray1}>
              부칙 (2023. 11. 01.)
            </Typography>
            <br />
            <Typography variant="body2">이 개인정보 처리방침은 2023. 11. 01.부터 적용됩니다.</Typography>
          </PolicyContainer>
        </Typography>
      </Container>
    </>
  );
}

const Container = styled(Body)`
  overflow-y: auto;
  padding: 10px 20px 30px 20px;
  width: 100%;
`;

const PolicyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: auto;
  padding: 20px 10px;
  line-height: 1.4;

  ol {
    list-style: auto inside;
    padding-left: 16px;
    text-indent: -16px;
  }

  ul {
    list-style: inside;
  }

  li {
    padding: 4px 0;
  }
`;
