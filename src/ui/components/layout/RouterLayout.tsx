import { Outlet } from 'react-router-dom';
import { Page, Layout } from '@ui/components/layout';

export function RouterLayout() {
  return (
    <Page>
      <Layout>
        <Outlet />
      </Layout>
    </Page>
  );
}
