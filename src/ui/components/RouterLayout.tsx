import { Outlet } from 'react-router-dom';
import { Layout, Page } from '@ui/components/layout';

export default function RouterLayout() {
  return (
    <Page>
      <Layout>
        <Outlet />
      </Layout>
    </Page>
  );
}
