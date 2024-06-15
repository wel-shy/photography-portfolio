import { useEffect, useRef } from "react";
import { Collection, ImageExifLookup } from "../lib/types";

const IMAGE_EXIF_CACHE_KEY = "image-exif";

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

  return rawLookup ? (JSON.parse(rawLookup) as ImageExifLookup) : null;
};

const cacheImageLookup = (collections: Collection[]) => {
  localStorage.setItem(
    IMAGE_EXIF_CACHE_KEY,
    JSON.stringify(getImageLookup(collections))
  );
};

const useCachedImageLookup = (collections: Collection[] | null) => {
  const imageExifLookup = useRef<ImageExifLookup | null>(
    getCachedImageLookup()
  );

  useEffect(() => {
    if (!collections) {
      return;
    }

    cacheImageLookup(collections);
  }, [collections]);

  return imageExifLookup;
};

export default useCachedImageLookup;
