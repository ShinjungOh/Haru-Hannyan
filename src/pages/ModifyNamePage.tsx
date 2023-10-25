import styled from '@emotion/styled';
import { styleToken } from '@ui/styles';
import { useNavigate } from 'react-router';
import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { Body } from '@ui/components/layout';
import { BaseButton, NavigationHeader } from '@ui/components/common';
import { getValidationUser } from '@lib/utils';
import { useAlert, useAxiosErrorAlert } from '@lib/hooks';
import { USER_NAME_KEY } from '@lib/const/localstorage';
import { PATH } from '@lib/const/path';
import { apiPatchName } from '../api/user';

export function ModifyNamePage() {
  const navigate = useNavigate();
  const alert = useAlert();
  const axiosErrorAlert = useAxiosErrorAlert();

  const [name, setName] = useState<string>('');
  const [nameValidation, setNameValidation] = useState(false);

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    const test = getValidationUser('name', value);

    setName(value);
    setNameValidation(test);
  };

  const handleSubmitPatchName = async () => {
    try {
      const responsePatchName = await apiPatchName(name);
      if (responsePatchName.success) {
        localStorage.setItem(USER_NAME_KEY, name);

        const responseAlert = await alert({
          type: 'success',
          title: responsePatchName.msg,
        });

        if (responseAlert) {
          navigate(PATH.SETTING);
          location.reload();
        }
      }
    } catch (e) {
      await axiosErrorAlert(e);
    }
  };

  const handleOnKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmitPatchName();
    }
  };

  const isError = {
    name: {
      error: name.length > 0 && name.length < 2,
      message: '닉네임 형식이 올바르지 않습니다.',
    },
  };

  const isDisabledSubmit = !nameValidation;

  return (
    <>
      <NavigationHeader isBack title="닉네임 변경하기" />
      <Container>
        <InputContainer>
          <Input
            type="text"
            name="name"
            placeholder="새로운 닉네임"
            onChange={handleChangeName}
            onKeyPress={handleOnKeyPress}
          />
          <ErrorMessage>{isError.name.error && isError.name.message}</ErrorMessage>
        </InputContainer>
        <BaseButton
          colorTheme="primary"
          disabled={isDisabledSubmit}
          style={{ marginTop: 28 }}
          onClick={handleSubmitPatchName}
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

const InputContainer = styled.div`
  width: auto;
  height: 80px;
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
