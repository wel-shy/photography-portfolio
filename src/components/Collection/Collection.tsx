import CollectionLinks from "../CollectionLinks";
import Gallery from "../Gallery";
import useCollection from "./useCollection";

const Collection = () => {
  const { images, id } = useCollection();

  return (
    <div>
      <CollectionLinks selectedCollection={id} />
      <Gallery images={images} />
    </div>
  );
};

export default Collection;
