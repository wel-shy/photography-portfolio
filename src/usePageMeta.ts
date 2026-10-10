import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_NAME = 'Daniel Welsh Photography';
const DEFAULT_TITLE = 'Daniel Welsh | Photography';
const DEFAULT_DESCRIPTION = "Daniel Welsh's photography portfolio";

interface PageMeta {
  title?: string | null;
  description?: string | null;
}

const setMeta = (
  attribute: 'name' | 'property',
  key: string,
  content: string
) => {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`
  );

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.content = content;
};

const setCanonical = (href: string) => {
  let element = document.head.querySelector<HTMLLinkElement>(
    'link[rel="canonical"]'
  );

  if (!element) {
    element = document.createElement('link');
    element.rel = 'canonical';
    document.head.appendChild(element);
  }

  element.href = href;
};

/**
 * Sets the document title, description, canonical URL and social sharing tags
 * for the current page. Falls back to the defaults in index.html.
 */
const usePageMeta = ({ title, description }: PageMeta = {}) => {
  const { pathname } = useLocation();

  useEffect(() => {
    const pageTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE;
    const pageDescription = description || DEFAULT_DESCRIPTION;
    const url = `${import.meta.env.VITE_SITE_URL}${pathname === '/' ? '/' : pathname.replace(/\/+$/, '')}`;

    document.title = pageTitle;
    setMeta('name', 'description', pageDescription);
    setMeta('property', 'og:title', pageTitle);
    setMeta('property', 'og:description', pageDescription);
    setMeta('property', 'og:url', url);
    setCanonical(url);
  }, [title, description, pathname]);
};

export default usePageMeta;
