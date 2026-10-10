import ImageFactory from './ImageFactory';
import { Image, ImageExifLookup } from './types';

class ImagesCollector {
  private _images: Image[] | null = null;

  private readonly imageFactory: ImageFactory;

  constructor(
    private readonly keys: string[],
    imageExifLookup: ImageExifLookup
  ) {
    this.imageFactory = new ImageFactory(imageExifLookup);
  }

  async populate() {
    const filteredKeys = this.keys.filter(
      (key) => key && key.includes('portfolio')
    );

    // Thumbnails mirror the image keys under their own prefix
    const allKeys = new Set(this.keys);
    const getThumbnailKey = (key: string) => {
      const thumbnailKey = key.replace(/^portfolio\//, 'thumbnails/');

      return thumbnailKey !== key && allKeys.has(thumbnailKey)
        ? thumbnailKey
        : undefined;
    };

    this._images = await Promise.all(
      filteredKeys.map(async (key) =>
        this.imageFactory.createImageFromKey(key, getThumbnailKey(key))
      )
    );
  }

  get images(): Image[] {
    if (!this._images) {
      throw new Error('Images must be populated');
    }
    return this._images;
  }
}

export default ImagesCollector;
