import Gallery from "../Gallery";
import useCollection from "./useCollection";

const Collection = () => {
  const collection = useCollection();
  if (!collection) {
    return null;
  }

  const { title, images } = collection;

  return (
    <div>
      <Gallery title={title} images={images} />
    </div>
  );
};

export default Collection;
