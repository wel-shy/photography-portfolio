import { Manifest } from './types';

/**
 * Fetch the manifest describing every image on the CDN
 *
 * @param cdnBaseUrl
 * @param siteUrl The CDN only responds to requests made on behalf of the site
 */
const fetchManifest = async (
  cdnBaseUrl: string,
  siteUrl: string
): Promise<Manifest> => {
  const response = await fetch(`${cdnBaseUrl}/manifest.json`, {
    headers: { Origin: siteUrl, 'User-Agent': 'welshy-photography-build' },
  });

  if (!response.ok) {
    throw new Error(`Could not fetch the manifest (${response.status})`);
  }

  return (await response.json()) as Manifest;
};

export default fetchManifest;
