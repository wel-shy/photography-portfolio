import getImageExif from './getImageExif';
import { Image, ImageExifLookup } from './types';

class ImageFactory {
  constructor(private readonly imageExifLookup: ImageExifLookup) {}

  private static async getImageExifData(url: string) {
    return getImageExif(url);
  }

  public async createImageFromKey(key: string): Promise<Image> {
    const [, , imageId] = key.split('/');

    const image = {
      id: imageId.split('.')[0],
      url: `${process.env.REACT_APP_CDN_BASE_URL}/${key}`,
    };

    const cachedExif = this.imageExifLookup[image.id];
    const exif = cachedExif ?? (await ImageFactory.getImageExifData(image.url));

    return {
      ...image,
      exif,
    };
  }
}

export default ImageFactory;
