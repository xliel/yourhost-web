import { MainLayout } from '@/components/layouts/main';
import { HomeView } from '@/sections/home/view/home-view';

export const dynamic = 'force-static';

export const metadata = {
  title: 'Home',
  description: 'Home page',
};

export default async function HomePage() {
  return (
    <MainLayout>
      <HomeView />
    </MainLayout>
  );
}
