import { useMemo } from 'react';
import { useCollectionsContext } from '../../contexts/CollectionsContext';
import { Image } from '../../lib/types';

const useImage = (imageId: string | undefined) => {
  const { collections } = useCollectionsContext();

  const image = useMemo(() => {
    const images = collections.reduce<Image[]>(
      (acc, { images: collectionImages }) => {
        return [...acc, ...collectionImages];
      },
      []
    );

    return images.find(({ id }) => imageId === id);
  }, [collections, imageId]);

  return image;
};

export default useImage;
