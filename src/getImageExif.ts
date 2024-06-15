import { parse } from "exifr";

interface ExifResult {
  DateTimeOriginal: Date | null;
  ExposureTime: number;
  FNumber: number | null;
  FocalLength: number | null;
  ISO: number | null;
  LensModel: string | null;
  Make: string | null;
  Model: string | null;
}

export type ExifData = Omit<ExifResult, "ExposureTime"> & {
  ExposureTime: string | null;
};

const getExposureTime = (exposureTime: number | null) => {
  if (!exposureTime) {
    return null;
  }

  if (exposureTime >= 1.0) {
    return `${exposureTime}s`;
  }

  const base = 1000;
  const num = exposureTime * 1000;

  return `1/${Math.ceil(base / num)}s`;
};

const getImageExif = async (url: string): Promise<ExifData | null> => {
  const exif = (await parse(url)) as ExifResult;
  if (!exif) {
    return null;
  }

  return { ...exif, ExposureTime: getExposureTime(exif?.ExposureTime) };
};

export default getImageExif;
