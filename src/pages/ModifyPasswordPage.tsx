import styled from '@emotion/styled';
import { styleToken } from '@ui/styles';
import { useNavigate } from 'react-router';
import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { Body } from '@ui/components/layout';
import { BaseButton, NavigationHeader, Typography } from '@ui/components/common';
import { getValidationUser } from '@lib/utils';
import { useAlert, useAxiosErrorAlert } from '@lib/hooks';
import { PATH } from '@lib/const/path';
import { apiPutPassword } from '../api/user';

export function ModifyPasswordPage() {
  const navigate = useNavigate();
  const alert = useAlert();
  const axiosErrorAlert = useAxiosErrorAlert();

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

  const handleSubmitPutPw = async () => {
    try {
      const responsePutPw = await apiPutPassword(pw.password);
      if (responsePutPw.success) {
        const responseAlert = await alert({
          type: 'success',
          title: responsePutPw.msg,
        });

        if (responseAlert) {
          navigate(PATH.SETTING);
        }
      }
    } catch (e) {
      await axiosErrorAlert(e);
    }
  };

  const handleOnKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmitPutPw();
    }
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

  const isDisabledSubmit = !(pwValidation.password && pwValidation.passwordCheck);

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
          <Input
            type="password"
            name="passwordCheck"
            placeholder="비밀번호 확인"
            onChange={handleChangePw}
            onKeyPress={handleOnKeyPress}
          />
          <ErrorMessage>{isError.passwordCheck.error && isError.passwordCheck.message}</ErrorMessage>
        </InputContainer>
        <BaseButton
          colorTheme="primary"
          disabled={isDisabledSubmit}
          style={{ marginTop: 28 }}
          onClick={handleSubmitPutPw}
        >
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
