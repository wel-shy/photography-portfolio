import axios from 'axios';
import { xml2js } from 'xml-js';
import CollectionCollector from './lib/CollectionsCollector';
import { Collection, ImageExifLookup } from './lib/types';

const CDNIndexURL = 'https://welshy-cdn.fra1.digitaloceanspaces.com';

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
    .filter((el: XMLElement) => el.name === 'Contents')
    .map(
      (el: XMLElement) =>
        el.elements.find(({ name }) => name === 'Key')?.elements[0]?.text
    );
};

/**
 * Fetch images from CDN and group into collections
 *
 * @param onSuccess
 */
const fetchCollections = async (
  imageExifLookup: ImageExifLookup,
  onSuccess: (result: Collection[]) => void
) => {
  const { data, status } = await axios.get<string>(CDNIndexURL);

  if (!(status === 200)) {
    throw new Error('Could not fetch images');
  }

  const collectionsCollector = new CollectionCollector(
    parseXMLToUrls(data),
    imageExifLookup
  );
  await collectionsCollector.populate();

  onSuccess(collectionsCollector.collections);
};

export default fetchCollections;
