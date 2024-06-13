import CollectionLinks from "../CollectionLinks";
import Gallery from "../Gallery";
import useCollection from "./useCollection";

const Collection = () => {
  const collection = useCollection();

  if (!collection) {
    return null;
  }

  return (
    <div>
      <CollectionLinks selectedCollection={collection.id} />
      <Gallery images={collection.images} />
    </div>
  );
};

export default Collection;
