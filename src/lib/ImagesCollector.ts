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

    this._images = await Promise.all(
      filteredKeys.map(async (key) => this.imageFactory.createImageFromKey(key))
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
