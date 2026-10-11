import { getCollections } from '../lib/collections.server';
import { getPageUrl } from '../lib/pageMeta';

export const loader = async () => {
  const collections = await getCollections();

  const urls = [
    '/',
    ...collections.map(({ id }) => `/collections/${id}`),
    ...collections.flatMap(({ images }) =>
      images.map(({ id }) => `/images/${id}`)
    ),
    '/contact',
    '/privacy',
  ].map(getPageUrl);

  const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls.map((url) => `  <url><loc>${encodeURI(url)}</loc></url>`),
    '</urlset>',
  ].join('\n');

  return new Response(sitemap, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
