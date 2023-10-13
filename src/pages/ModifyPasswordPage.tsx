import styled from '@emotion/styled';
import { styleToken } from '@ui/styles';
import { BaseButton, NavigationHeader, Typography } from '@ui/components/common';
import { Body } from '@ui/components/layout';
import { ChangeEvent, useState } from 'react';
import { getValidationUser } from '@lib/utils';

export function ModifyPasswordPage() {
  const [pw, setPw] = useState({
    password: '',
    passwordCheck: '',
  });
  const [pwValidation, setPwValidation] = useState({
    password: false,
    passwordCheck: false,
  });

  const handleChangePw = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    console.log(name, value);

    let test = false;

    if (name === 'passwordCheck') {
      test = pw.password === value;
    } else {
      test = getValidationUser('password', value);
    }

    setPw({
      ...pw,
      [name]: value,
    });

    setPwValidation({
      ...pwValidation,
      [name]: test,
    });
  };

  const isError = {
    password: {
      error: pw.password.length > 0 && pw.password.length < 9 && !pwValidation.password,
      message: '8글자 이상 입력해 주세요.',
    },
    passwordCheck: {
      error: pw.passwordCheck.length > 0 && !pwValidation.passwordCheck,
      message: '비밀번호가 일치하지 않습니다.',
    },
  };

  const isValidate = !(pwValidation.password && pwValidation.passwordCheck);

  return (
    <>
      <NavigationHeader isBack title="비밀번호 변경하기" />
      <Container>
        <DescriptionContainer>
          <Typography variant="body2">
            안전한 사용을 위해
            <br />
            <span style={{ fontWeight: 600, color: styleToken.color.gray1 }}>8글자 이상</span>의 비밀번호를 입력해
            주세요.
          </Typography>
        </DescriptionContainer>
        <InputContainer>
          <Input type="password" name="password" placeholder="새로운 비밀번호" onChange={handleChangePw} />
          <ErrorMessage>{isError.password.error && isError.password.message}</ErrorMessage>
          <Input type="password" name="passwordCheck" placeholder="비밀번호 확인" onChange={handleChangePw} />
          <ErrorMessage>{isError.passwordCheck.error && isError.passwordCheck.message}</ErrorMessage>
        </InputContainer>
        <BaseButton colorTheme="primary" disabled={isValidate} style={{ marginTop: 28 }}>
          변경하기
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

const DescriptionContainer = styled.div`
  width: auto;
  height: auto;
  padding: 20px;
  border-radius: 14px;
  text-align: center;
  background-color: ${styleToken.color.secondary}50;
`;

const InputContainer = styled.div`
  width: auto;
  height: auto;
  margin-top: 18px;
`;

const Input = styled.input`
  width: 100%;
  height: 68px;
  padding: 12px;
  font-size: 16px;
  color: ${styleToken.color.gray2};
  background-color: ${styleToken.color.background};
  border: none;
  border-bottom: 1px solid ${styleToken.color.gray4};
  outline: 0;

  & + & {
    margin-top: 20px;
  }

  ::placeholder {
    color: ${styleToken.color.gray4};
  }
`;

const ErrorMessage = styled.p`
  color: ${styleToken.color.alert_danger};
  width: 100%;
  height: 15px;
  padding-left: 10px;
  margin-top: 10px;
  font-size: 14px;
`;
