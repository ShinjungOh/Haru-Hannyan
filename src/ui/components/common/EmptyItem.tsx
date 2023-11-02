import styled from '@emotion/styled';
import { styleToken } from '@ui/styles';
import { CSSProperties } from 'react';
import { Typography } from '@ui/components/common/Typography';

type EmptyItemProps = {
  description: string;
  fontSize?: string;
  style?: CSSProperties;
};

export function EmptyItem({ description, fontSize, style, ...props }: EmptyItemProps) {
  return (
    <EmptyContainer style={style} {...props}>
      <Typography
        variant="subtitle3"
        color={styleToken.color.gray3}
        fontWeight={400}
        fontSize={fontSize || '14px'}
        style={{ textAlign: 'center' }}
      >
        {description}
      </Typography>
    </EmptyContainer>
  );
}

const EmptyContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 18px;
  width: 100%;
  min-height: 100px;
  background-color: white;
  border-radius: 15px;
  border: 1px solid ${styleToken.color.gray5};
  cursor: pointer;
`;
