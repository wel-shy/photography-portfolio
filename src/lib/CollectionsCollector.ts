import { Collection, Image } from "./types";

class CollectionCollector {
  constructor(private readonly keys: string[]) {}

  private getImageFromString(key: string) {
    const [, , imageId] = key.split("/");

    return {
      id: imageId.split(".")[0],
      url: `${process.env.REACT_APP_CDN_BASE_URL}/${key}`,
    };
  }

  private updateCollection(collections: Collection[], collection: Collection) {
    return collections
      .filter(
        ({ title: collectionTitle }) => collectionTitle !== collection.title
      )
      .concat(collection);
  }

  private reduceToImages() {
    return this.keys.reduce<Image[]>((acc, key) => {
      if (!key.includes("portfolio")) {
        return acc;
      }

      return [...acc, this.getImageFromString(key)];
    }, []);
  }

  private reduceImagesToCollections() {
    const collectionLookup: Record<string, number> = {};

    return this.reduceToImages().reduce<Collection[]>((acc, image) => {
      const title = image.url.split("/")[4];
      const collectionIdx = collectionLookup[title];

      const collection =
        collectionIdx != null
          ? {
              ...acc[collectionIdx],
              images: [...acc[collectionIdx].images, image],
            }
          : { title, id: title, images: [image] };

      if (collectionIdx != null) {
        return this.updateCollection(acc, collection);
      }

      collectionLookup[title] = acc.length;
      return [...acc, collection];
    }, []);
  }

  get collections(): Collection[] {
    return this.reduceImagesToCollections();
  }
}

export default CollectionCollector;
