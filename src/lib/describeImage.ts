import { Exif } from './types';

const includes = (text: string, part: string) =>
  text.toLowerCase().includes(part.toLowerCase());

/**
 * The given places without blanks or repeats, as a city state such as Singapore
 * is both the city and the country
 */
const getPlaces = (places: (string | null | undefined)[]) =>
  places.filter(
    (place, index): place is string =>
      !!place &&
      !places.slice(0, index).some((other) => other && includes(other, place))
  );

/**
 * Where the image was taken, most specific place first, e.g. Södermalm, Stockholm, Sweden
 */
export const getImageLocation = (exif: Exif | null) => {
  const { sublocation, city, state, country } = exif?.location ?? {};

  return getPlaces([sublocation, city, state, country]).join(', ') || null;
};

/**
 * A name for the image that says where it was taken, for page titles and alt text.
 * Untitled images are named after their location.
 */
export const getImageName = (exif: Exif | null) => {
  const title = exif?.title || null;

  if (!title) {
    return getImageLocation(exif);
  }

  // Titles are often place names themselves, which getPlaces leaves out
  const { city, country } = exif?.location ?? {};

  return getPlaces([title, city, country]).join(', ');
};

export const getImageDescription = (exif: Exif | null) => {
  if (exif?.caption) {
    return exif.caption;
  }

  const title = exif?.title || null;
  const location = getImageLocation(exif);

  if (!title) {
    return location
      ? `A photograph taken in ${location} by Daniel Welsh.`
      : 'A photograph by Daniel Welsh.';
  }

  return location && !includes(title, location)
    ? `${title}, photographed in ${location} by Daniel Welsh.`
    : `${title}, photographed by Daniel Welsh.`;
};
