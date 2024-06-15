import { useEffect, useState } from "react";
import { Collection, ImageExifLookup } from "../lib/types";

const IMAGE_EXIF_CACHE_KEY = "image-exif";

type CachedExifLookup = ImageExifLookup & { expiresAt: string };

const getImageLookup = (collections: Collection[]): ImageExifLookup => {
  return collections.reduce<ImageExifLookup>((acc, collection) => {
    const images = collection.images.reduce((imageAcc, image) => {
      return { ...imageAcc, [image.id]: image.exif };
    }, {});

    return { ...acc, ...images };
  }, {});
};

const getCachedImageLookup = () => {
  const rawLookup = localStorage.getItem(IMAGE_EXIF_CACHE_KEY);
  if (!rawLookup) {
    return null;
  }

  const { expiresAt: expiresAtRaw, ...cachedData } = JSON.parse(
    rawLookup
  ) as CachedExifLookup;

  const expiresAt = new Date(expiresAtRaw);
  if (expiresAt < new Date()) {
    return null;
  }

  return cachedData;
};

const cacheImageLookup = (collections: Collection[]) => {
  const exif = getImageLookup(collections);
  const expiresAt = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);

  localStorage.setItem(
    IMAGE_EXIF_CACHE_KEY,
    JSON.stringify({ ...exif, expiresAt })
  );
};

const useCachedImageLookup = (collections: Collection[] | null) => {
  const [imageExifLookup, setImageExifLookup] =
    useState<ImageExifLookup | null>(null);

  useEffect(() => {
    if (imageExifLookup) {
      return;
    }

    const lookup = getCachedImageLookup();
    setImageExifLookup(lookup ?? {});

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!collections || !imageExifLookup) {
      return;
    }

    cacheImageLookup(collections);
  }, [collections, imageExifLookup]);

  return imageExifLookup;
};

export default useCachedImageLookup;
