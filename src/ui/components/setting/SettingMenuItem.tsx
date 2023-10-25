import styled from '@emotion/styled';
import { styleToken } from '@ui/styles';
import { useNavigate } from 'react-router';
import { Typography } from '@ui/components/common';
import { MenuItems } from '@lib/types';

export function SettingMenuItem({ title, description, link, isOpen }: MenuItems) {
  const navigate = useNavigate();

  const isLink = Boolean(link);

  const handleClickMenu = () => {
    if (link && isOpen) {
      window.open(link);
      return;
    }

    if (link) {
      navigate(link);
    }
  };

  return (
    <SettingButton type="button" onClick={handleClickMenu} isLink={isLink}>
      <Typography variant="body3">{title}</Typography>
      <>
        {description && (
          <Typography variant="body3" fontWeight={600} color={styleToken.color.secondaryActive}>
            {description}
          </Typography>
        )}
      </>
    </SettingButton>
  );
}

const SettingButton = styled.button<{ isLink: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  width: 100%;
  height: auto;
  padding: 14px 14px;
  background-color: white;
  border: unset;
  cursor: ${(props) => (props.isLink ? 'pointer' : 'unset')};
`;
