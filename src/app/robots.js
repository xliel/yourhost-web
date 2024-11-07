import { website } from '@/data/website';

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/cgi-bin/'],
      },
    ],
    sitemap: `${website.url}/sitemap.xml`,
    host: website.url,
  };
}
