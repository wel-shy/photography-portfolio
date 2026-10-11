import { MetaDescriptor } from 'react-router';
import { Image } from './types';

const SITE_NAME = 'Daniel Welsh Photography';
const DEFAULT_TITLE = 'Daniel Welsh | Photography';
const DEFAULT_DESCRIPTION = "Daniel Welsh's photography portfolio";

interface PageMeta {
  pathname: string;
  title?: string | null;
  description?: string | null;
  /** Shown when the page is shared. Only thumbnails can be fetched by other sites. */
  image?: Image | null;
}

export const getPageUrl = (pathname: string) =>
  `${import.meta.env.VITE_SITE_URL}${pathname === '/' ? '/' : pathname.replace(/\/+$/, '')}`;

/**
 * The title, description, canonical URL and social sharing tags for a page.
 * Falls back to the site's defaults, which have no image.
 */
const pageMeta = ({
  pathname,
  title,
  description,
  image,
}: PageMeta): MetaDescriptor[] => {
  const pageTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE;
  const pageDescription = description || DEFAULT_DESCRIPTION;
  const url = getPageUrl(pathname);

  return [
    { title: pageTitle },
    { name: 'description', content: pageDescription },
    { property: 'og:title', content: pageTitle },
    { property: 'og:description', content: pageDescription },
    { property: 'og:url', content: url },
    { tagName: 'link', rel: 'canonical', href: url },
    {
      name: 'twitter:card',
      content: image ? 'summary_large_image' : 'summary',
    },
    ...(image ? [{ property: 'og:image', content: image.thumbnailUrl }] : []),
    ...(image?.exif?.title
      ? [{ property: 'og:image:alt', content: image.exif.title }]
      : []),
  ];
};

export default pageMeta;
