import { Outlet } from 'react-router-dom';
import { Layout } from '@ui/components/layout';

export default function RouterLayout() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
