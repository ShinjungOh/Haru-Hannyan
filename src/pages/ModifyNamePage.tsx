import { BaseButton, NavigationHeader } from '@ui/components/common';
import styled from '@emotion/styled';
import { styleToken } from '@ui/styles';
import { Body } from '@ui/components/layout';
import { ChangeEvent, useState } from 'react';
import { getValidationUser } from '@lib/utils';

export function ModifyNamePage() {
  const [name, setName] = useState<string>('');
  const [nameValidation, setNameValidation] = useState(false);

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    let test = false;
    test = getValidationUser('name', value);

    setName(value);
    setNameValidation(test);
  };

  const isError = {
    name: {
      error: name.length > 0 && name.length < 2,
      message: '닉네임 형식이 올바르지 않습니다.',
    },
  };

  const isValidate = !nameValidation;

  return (
    <>
      <NavigationHeader isBack title="닉네임 변경하기" />
      <Container>
        <InputContainer>
          <Input type="text" name="name" placeholder="새로운 닉네임" onChange={handleChangeName} />
          <ErrorMessage>{isError.name.error && isError.name.message}</ErrorMessage>
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
