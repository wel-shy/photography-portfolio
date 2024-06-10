import { useParams } from "react-router-dom";
import { useCollectionsContext } from "../../contexts/CollectionsContext";

const useCollection = () => {
  const { id } = useParams();
  const { collections } = useCollectionsContext();

  const collection = collections.find(
    ({ id: collectionId }) => collectionId === id
  );

  return collection;
};

export default useCollection;
