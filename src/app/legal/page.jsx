import { MainLayout } from '@/components/layouts/main';
import { LegalView } from '@/sections/legal/legal-view';

export const dynamic = 'force-static';

export const metadata = {
  title: 'Legal Documents',
  description:
    'All legal documents and terms of service are here for you to read.',
};

export default async function LegalPage() {
  return (
    <MainLayout>
      <LegalView />
    </MainLayout>
  );
}
