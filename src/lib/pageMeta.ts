import { MetaDescriptor } from 'react-router';

const SITE_NAME = 'Daniel Welsh Photography';
const DEFAULT_TITLE = 'Daniel Welsh | Photography';
const DEFAULT_DESCRIPTION = "Daniel Welsh's photography portfolio";

interface PageMeta {
  pathname: string;
  title?: string | null;
  description?: string | null;
}

export const getPageUrl = (pathname: string) =>
  `${import.meta.env.VITE_SITE_URL}${pathname === '/' ? '/' : pathname.replace(/\/+$/, '')}`;

/**
 * The title, description, canonical URL and social sharing tags for a page.
 * Falls back to the site's defaults.
 */
const pageMeta = ({
  pathname,
  title,
  description,
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
  ];
};

export default pageMeta;
