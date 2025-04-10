import { useCollectionsContext } from '../../contexts/CollectionsContext';

const useCollectionLinksController = () => {
  const { collections } = useCollectionsContext();

  return {
    collectionLinks: collections.map(({ id, title }) => ({
      id,
      title,
      link: `/collections/${id}`,
    })),
  };
};

export default useCollectionLinksController;
