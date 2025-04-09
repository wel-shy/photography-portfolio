import BasePage from "../BasePage/BasePage";
import Gallery from "../Gallery";
import useCollection from "./useCollection";

const Collection = () => {
  const collection = useCollection();

  if (!collection) {
    return null;
  }

  return (
    <BasePage>
      <Gallery images={collection.images} />
    </BasePage>
  );
};

export default Collection;
