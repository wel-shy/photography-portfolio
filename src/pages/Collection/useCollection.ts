import { useParams } from 'react-router-dom';
import { useMemo } from 'react';
import { useCollectionsContext } from '../../contexts/CollectionsContext';
import { Collection } from '../../lib/types';

const sortCollectionImages = (collection: Collection) => {
  const images = collection?.images.sort((a, b) => {
    const aCreated = a.exif?.createdAt;
    const bCreated = b.exif?.createdAt;

    return (
      new Date(bCreated ?? 0).getTime() - new Date(aCreated ?? 0).getTime()
    );
  });

  return { ...collection, images };
};

const getCollection = (collections: Collection[], id: string | undefined) => {
  const result =
    collections.find(({ id: collectionId }) => collectionId === id) ??
    collections[0];

  if (!result) {
    return null;
  }

  return sortCollectionImages(result);
};

const useCollection = () => {
  const { id } = useParams();
  const { collections } = useCollectionsContext();

  const collection = useMemo(
    () => getCollection(collections, id),
    [collections, id]
  );

  return collection;
};

export default useCollection;
