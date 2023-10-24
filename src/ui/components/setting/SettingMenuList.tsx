import styled from '@emotion/styled';
import { styleToken } from '@ui/styles';
import { Typography } from '@ui/components/common';
import { SettingMenuItem } from '@ui/components/setting/SettingMenuItem';

type MenuItems = {
  title: string;
  description?: string;
  link?: string;
  isOpen?: boolean;
};

type SettingListProps = {
  label: string;
  menuItems: MenuItems[];
};

export function SettingMenuList({ label, menuItems }: SettingListProps) {
  return (
    <>
      <Container>
        <Typography variant="body3" color={styleToken.color.gray2} style={{ marginBottom: 6, paddingLeft: 8 }}>
          {label}
        </Typography>
        <InfoContainer>
          <>
            {menuItems.map((menuItem) => (
              <SettingMenuItem key={menuItem.title} {...menuItem} />
            ))}
          </>
        </InfoContainer>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: auto;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
  padding: 10px;
  width: 100%;
  height: auto;
  margin-bottom: 6px;
  background-color: white;
  border-radius: 15px;
  border: 1px solid ${styleToken.color.gray5};
  gap: 6px;
`;
