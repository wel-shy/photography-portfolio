import { getCollections } from '../lib/collections.server';
import { getPageUrl } from '../lib/pageMeta';
import { Image } from '../lib/types';

const escapeXml = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');

const getLoc = (url: string) => escapeXml(encodeURI(url));

/**
 * @param pathname
 * @param images Thumbnails shown on the page, which search engines may index
 */
const getUrlEntry = (pathname: string, images: Image[] = []) =>
  [
    '  <url>',
    `    <loc>${getLoc(getPageUrl(pathname))}</loc>`,
    ...images.map(
      ({ thumbnailUrl }) =>
        `    <image:image><image:loc>${getLoc(thumbnailUrl)}</image:loc></image:image>`
    ),
    '  </url>',
  ].join('\n');

export const loader = async () => {
  const collections = await getCollections();

  const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">',
    getUrlEntry('/'),
    ...collections.map(({ id, images }) =>
      getUrlEntry(`/collections/${id}`, images)
    ),
    ...collections.flatMap(({ images }) =>
      images.map((image) => getUrlEntry(`/images/${image.id}`, [image]))
    ),
    getUrlEntry('/contact'),
    getUrlEntry('/privacy'),
    '</urlset>',
  ].join('\n');

  return new Response(sitemap, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
