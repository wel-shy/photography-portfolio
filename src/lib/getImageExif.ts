import { parse } from "exifr";
import { Exif, ExifResult } from "./types";

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

const getImageExif = async (url: string): Promise<Exif | null> => {
  const exif = (await parse(url, true)) as ExifResult;
  if (!exif) {
    return null;
  }

  const { ObjectName: title, FNumber, ISO, Model, FocalLength } = exif;

  return {
    exposureTime: getExposureTime(exif?.ExposureTime),
    focalLength: FocalLength,
    fStop: FNumber,
    ISO,
    model: Model,
    title,
  };
};

export default getImageExif;
