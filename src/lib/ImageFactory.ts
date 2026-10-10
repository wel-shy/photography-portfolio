import getImageExif from './getImageExif';
import { Image, ImageExifLookup } from './types';

class ImageFactory {
  constructor(private readonly imageExifLookup: ImageExifLookup) {}

  private static async getImageExifData(url: string) {
    return getImageExif(url);
  }

  /**
   * @param key Key of the full size image, e.g. portfolio/Cityscapes/1.jpg
   * @param thumbnailKey Key of its thumbnail, when one has been uploaded
   */
  public async createImageFromKey(
    key: string,
    thumbnailKey?: string
  ): Promise<Image> {
    const [, , imageId] = key.split('/');

    const url = `${import.meta.env.VITE_CDN_BASE_URL}/${key}`;
    const image = {
      id: imageId.split('.')[0],
      url,
      thumbnailUrl: thumbnailKey
        ? `${import.meta.env.VITE_CDN_BASE_URL}/${thumbnailKey}`
        : url,
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
