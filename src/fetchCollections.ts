import axios from "axios";
import { xml2js } from "xml-js";
import { Collection, Image } from "./contexts/CollectionsContext";

const updateCollection = (
  collections: Collection[],
  collection: Collection
) => {
  return collections
    .filter(
      ({ title: collectionTitle }) => collectionTitle !== collection.title
    )
    .concat(collection);
};

const getImageFromString = (key: string): Image => {
  const [, , imageId] = key.split("/");
  return {
    id: imageId.split(".")[0],
    url: `${process.env.REACT_APP_CDN_BASE_URL}/${key}`,
  };
};

const reduceKeys =
  (collectionLookup: Record<string, number>) =>
  (acc: Collection[], key: string) => {
    if (!key.includes("portfolio")) {
      return acc;
    }

    const [, title] = key.split("/");
    const image = getImageFromString(key);
    const collectionIdx = collectionLookup[title];

    if (collectionIdx != null) {
      const collection = {
        ...acc[collectionIdx],
        images: [...acc[collectionIdx].images, image],
      };

      return updateCollection(acc, collection);
    }

    collectionLookup[title] = acc.length;
    return [...acc, { title, id: title, images: [image] }];
  };

/**
 * Parse the contents of the resposne, and group into collections.
 *
 * @param keys
 * @returns
 */
const parseKeysToCollections = (keys: string[]): Collection[] => {
  const init: Collection[] = [];
  const collectionLookup: Record<string, number> = {};

  return keys.reduce(reduceKeys(collectionLookup), init);
};

interface XMLElement {
  name: string;
  elements: XMLElement[];
  text?: string;
}

const parseXMLToUrls = (xml: string) => {
  const {
    elements: [{ elements: parsedData }],
  } = xml2js(xml);

  return parsedData
    .filter((el: XMLElement) => el.name === "Contents")
    .map(
      (el: XMLElement) =>
        el.elements.find(({ name }) => name === "Key")?.elements[0]?.text
    );
};

/**
 * Fetch images from CDN and group into collections
 *
 * @param onSuccess
 */
const fetchCollections = async (onSuccess: (result: Collection[]) => void) => {
  const { data, status } = await axios.get<string>(
    "https://welshy-cdn.fra1.digitaloceanspaces.com"
  );

  if (!(status === 200)) {
    throw new Error("Could not fetch images");
  }

  const collections = parseKeysToCollections(parseXMLToUrls(data));

  onSuccess(collections);
};

export default fetchCollections;
