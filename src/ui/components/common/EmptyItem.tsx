import styled from '@emotion/styled';
import { styleToken } from '@ui/styles';
import { Typography } from '@ui/components/common/Typography';

type EmptyItemProps = {
  description: string;
};

export function EmptyItem({ description }: EmptyItemProps) {
  return (
    <EmptyContainer>
      <Typography variant="subtitle3" color={styleToken.color.gray3} fontWeight={400}>
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
  height: 100px;
  background-color: white;
  border-radius: 15px;
  border: 1px solid ${styleToken.color.gray5};
  font-size: 14px;
  cursor: pointer;
`;
