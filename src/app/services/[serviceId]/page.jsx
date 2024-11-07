import { redirect } from 'next/navigation';

import { MainLayout } from '@/components/layouts/main';
import { ServiceView } from '@/sections/services/view';

import { services } from '@/data/services';

export const dynamic = 'force-static';
export async function generateMetadata({ params }) {
  const serviceId = params?.serviceId || '';
  const service = services.find((s) => s.slug === serviceId);
  if (!service) {
    return {
      title: 'Service Not Found',
      description: 'Service not found',
    };
  }

  return {
    title: service.name,
    description: service?.description || `${service.name} service`,
  };
}

export default async function ServicePackagesPage({ params }) {
  const serviceId = params?.serviceId || '';
  const service = services.find((s) => s.slug === serviceId);
  if (!service) redirect('/not-found');

  return (
    <MainLayout>
      <ServiceView service={service} />
    </MainLayout>
  );
}
