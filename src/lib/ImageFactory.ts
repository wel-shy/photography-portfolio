import getImageExif from "./getImageExif";
import { Image } from "./types";

class ImageFactory {
  private async getImageExifData(url: string) {
    return getImageExif(url);
  }

  public async createImageFromKey(key: string): Promise<Image> {
    const [, , imageId] = key.split("/");

    const image = {
      id: imageId.split(".")[0],
      url: `${process.env.REACT_APP_CDN_BASE_URL}/${key}`,
    };

    const exif = await this.getImageExifData(image.url);

    console.log(exif);

    return {
      ...image,
      exif,
    };
  }
}

export default ImageFactory;
