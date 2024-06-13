import axios from "axios";
import { xml2js } from "xml-js";
import { Collection, Image } from "./contexts/CollectionsContext";

const parseContents = (keys: string[]): Collection[] => {
  const init: Collection[] = [];
  const collectionLookup: Record<string, number> = {};

  return keys.reduce((acc, key) => {
    if (!key.includes("portfolio")) {
      return acc;
    }

    const [, title, imageId] = key.split("/");
    const image: Image = {
      id: imageId,
      url: `${process.env.REACT_APP_CDN_BASE_URL}/${key}`,
    };

    const collectionIdx = collectionLookup[title];

    if (collectionIdx != null) {
      return acc
        .filter(({ title: collectionTitle }) => collectionTitle !== title)
        .concat({
          ...acc[collectionIdx],
          images: [...acc[collectionIdx].images, image],
        });
    }

    collectionLookup[title] = acc.length;

    return [...acc, { title, id: title, images: [image] }];
  }, init);
};

interface XMLElement {
  name: string;
  elements: XMLElement[];
  text?: string;
}

const fetchCollections = async (onSuccess: (result: Collection[]) => void) => {
  const { data, status } = await axios.get<string>(
    "https://welshy-cdn.fra1.digitaloceanspaces.com"
  );

  if (!(status === 200)) {
    throw new Error("Could not fetch images");
  }

  const {
    elements: [{ elements: parsedData }],
  } = xml2js(data);
  const filtered = parsedData
    .filter((el: XMLElement) => el.name === "Contents")
    .map(
      (el: XMLElement) =>
        el.elements.find(({ name }) => name === "Key")?.elements[0]?.text
    );

  onSuccess(parseContents(filtered));
};

export default fetchCollections;
