import fetchManifest from './fetchManifest';
import { Collection, Image, ManifestImage } from './types';

const CDN_BASE_URL = import.meta.env.VITE_CDN_BASE_URL;

let cachedCollections: Promise<Collection[]> | null = null;

const createImage = ({
  id,
  key,
  thumbnailKey,
  modifiedAt,
  exif,
}: ManifestImage): Image => {
  const url = `${CDN_BASE_URL}/${key}`;

  return {
    id,
    url,
    thumbnailUrl: thumbnailKey ? `${CDN_BASE_URL}/${thumbnailKey}` : url,
    modifiedAt: modifiedAt ?? null,
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

/**
 * The page a collection is linked to and indexed at. The first collection is the
 * home page, so that is used rather than its own /collections page.
 */
export const getCollectionPath = (collections: Collection[], id: string) =>
  collections[0]?.id === id ? '/' : `/collections/${id}`;

/**
 * An image along with its collection and the images shown either side of it there
 */
export const getImage = async (imageId: string | undefined) => {
  const collections = await getCollections();
  const collection = collections.find(({ images }) =>
    images.some(({ id }) => id === imageId)
  );

  if (!collection) {
    return null;
  }

  const index = collection.images.findIndex(({ id }) => id === imageId);

  return {
    image: collection.images[index],
    collection: {
      title: collection.title,
      link: getCollectionPath(collections, collection.id),
    },
    previous: collection.images[index - 1] ?? null,
    next: collection.images[index + 1] ?? null,
  };
};
