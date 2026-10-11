import fetchManifest from './fetchManifest';
import { Collection, Image, ManifestImage } from './types';

const CDN_BASE_URL = import.meta.env.VITE_CDN_BASE_URL;

let cachedCollections: Promise<Collection[]> | null = null;

const createImage = ({ id, key, thumbnailKey, exif }: ManifestImage): Image => {
  const url = `${CDN_BASE_URL}/${key}`;

  return {
    id,
    url,
    thumbnailUrl: thumbnailKey ? `${CDN_BASE_URL}/${thumbnailKey}` : url,
    exif,
  };
};

const sortImages = (images: Image[]) =>
  images.toSorted(
    (a, b) =>
      new Date(b.exif?.createdAt ?? 0).getTime() -
      new Date(a.exif?.createdAt ?? 0).getTime()
  );

const fetchCollections = async (): Promise<Collection[]> => {
  const { collections } = await fetchManifest(
    CDN_BASE_URL,
    import.meta.env.VITE_SITE_URL
  );

  return collections.map(({ id, title, images }) => ({
    id,
    title,
    images: sortImages(images.map(createImage)),
  }));
};

/**
 * Collections of images on the CDN, newest image first
 */
export const getCollections = () => {
  // Every page is rendered from the same manifest during a build
  if (!import.meta.env.PROD) {
    return fetchCollections();
  }

  cachedCollections ??= fetchCollections();

  return cachedCollections;
};

export const getCollection = async (id: string | undefined) => {
  const collections = await getCollections();

  // The home page shows the first collection
  return id
    ? collections.find((collection) => collection.id === id)
    : collections[0];
};

export const getImage = async (imageId: string | undefined) => {
  const collections = await getCollections();

  return collections
    .flatMap(({ images }) => images)
    .find(({ id }) => id === imageId);
};
