import { website } from '@/data/website';
import { services } from '@/data/services';

export default function sitemap() {
  const routesMap = ['', '/legal'].map((route) => ({
    url: `${website.url}${route}`,
    lastModified: new Date(),
    priority: 0.8,
  }));

  const allServices = services.map((service) => ({
    url: `${website.url}/services/${service.slug}`,
    lastModified: new Date(),
    priority: 0.7,
  }));

  return [...routesMap, ...allServices];
}
