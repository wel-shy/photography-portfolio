import { getImageDescription, getImageLocation } from './describeImage';
import { getPageUrl } from './pageMeta';
import { Image } from './types';

const PHOTOGRAPHER = {
  '@type': 'Person',
  name: 'Daniel Welsh',
  url: getPageUrl('/'),
  sameAs: [
    'https://www.instagram.com/wel__shy/',
    'https://bsky.app/profile/wel-shy.bsky.social',
  ],
};

/**
 * Describes the site and its photographer to search engines, for the home page
 */
export const getSiteStructuredData = () => [
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Daniel Welsh Photography',
    url: getPageUrl('/'),
    author: PHOTOGRAPHER,
  },
  { '@context': 'https://schema.org', ...PHOTOGRAPHER },
];

/**
 * Describes a photo and who owns it to search engines, which show the credit and
 * copyright alongside the image in their results.
 *
 * @param image
 * @param pathname Path of the page showing the image
 */
export const getImageStructuredData = (image: Image, pathname: string) => {
  const { exif } = image;
  const location = getImageLocation(exif);

  return {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    // Only thumbnails can be fetched by search engines
    contentUrl: image.thumbnailUrl,
    url: getPageUrl(pathname),
    ...(exif?.title ? { name: exif.title } : {}),
    description: getImageDescription(exif),
    ...(exif?.createdAt ? { dateCreated: exif.createdAt } : {}),
    ...(location
      ? { contentLocation: { '@type': 'Place', name: location } }
      : {}),
    creator: PHOTOGRAPHER,
    creditText: PHOTOGRAPHER.name,
    copyrightNotice: `© ${PHOTOGRAPHER.name}`,
    acquireLicensePage: getPageUrl('/contact'),
  };
};
