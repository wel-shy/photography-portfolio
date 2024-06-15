import { useParams } from "react-router-dom";
import { useCollectionsContext } from "../../contexts/CollectionsContext";
import { useMemo } from "react";

const useCollection = () => {
  const { id } = useParams();
  const { collections } = useCollectionsContext();

  const collection = useMemo(() => {
    const result =
      collections.find(({ id: collectionId }) => collectionId === id) ??
      collections[0];

    if (!result) {
      return null;
    }

    const images = result?.images.sort(
      (a, b) =>
        (b.exif?.createdAt?.getTime() ?? 0) -
        (a.exif?.createdAt?.getTime() ?? 0)
    );

    return { ...result, images };
  }, [collections, id]);

  return collection;
};

export default useCollection;
