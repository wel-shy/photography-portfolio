import ImagesCollector from "./ImagesCollector";
import { Collection } from "./types";

class CollectionCollector {
  private _collections: Collection[] | null = null;

  constructor(private readonly keys: string[]) {}

  private updateCollection(collections: Collection[], collection: Collection) {
    return collections
      .filter(
        ({ title: collectionTitle }) => collectionTitle !== collection.title
      )
      .concat(collection);
  }

  private async reduceImagesToCollections() {
    const collectionLookup: Record<string, number> = {};
    const imagesCollector = new ImagesCollector(this.keys);

    await imagesCollector.populate();

    return imagesCollector.images.reduce<Collection[]>((acc, image) => {
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

  async populate(): Promise<void> {
    this._collections = await this.reduceImagesToCollections();
  }

  get collections(): Collection[] {
    if (this._collections === null) {
      throw new Error("Collections must be populated");
    }

    return this._collections;
  }
}

export default CollectionCollector;
