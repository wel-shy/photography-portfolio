import axios from 'axios';
import CollectionCollector from './lib/CollectionsCollector';
import { Collection, ImageExifLookup } from './lib/types';

// The CDN root responds with a JSON array of every image key
const CDNIndexURL = import.meta.env.VITE_CDN_BASE_URL;

/**
 * Fetch images from CDN and group into collections
 *
 * @param onSuccess
 */
const fetchCollections = async (
  imageExifLookup: ImageExifLookup,
  onSuccess: (result: Collection[]) => void
) => {
  const { data, status } = await axios.get<string[]>(CDNIndexURL);

  if (!(status === 200)) {
    throw new Error('Could not fetch images');
  }

  const collectionsCollector = new CollectionCollector(data, imageExifLookup);
  await collectionsCollector.populate();

  onSuccess(collectionsCollector.collections);
};

export default fetchCollections;
