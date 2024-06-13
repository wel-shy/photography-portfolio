import { useMemo } from "react";
import {
  useCollectionsContext,
  Image,
} from "../../contexts/CollectionsContext";

const useImage = (imageId: string | undefined) => {
  const { collections } = useCollectionsContext();

  const image = useMemo(() => {
    const images = collections.reduce<Image[]>((acc, { images }) => {
      return [...acc, ...images];
    }, []);

    return images.find(({ id }) => imageId === id);
  }, [collections, imageId]);

  return image;
};

export default useImage;
