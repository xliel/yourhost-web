import { MainLayout } from '@/components/layouts/main';
import { NotFoundView } from '@/sections/error';

export const metadata = {
  title: '404 Page Not Found! - Error Page',
};
export default function NotFoundPage() {
  return (
    <MainLayout usePending={false}>
      <NotFoundView />
    </MainLayout>
  );
}
