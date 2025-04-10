import { parse } from 'exifr';
import { Exif, ExifResult } from './types';
import { Buffer } from 'buffer';

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
  const exif = (await parse(url, {
    iptc: true,
    icc: false,
  })) as ExifResult;

  if (!exif) {
    return null;
  }

  const {
    ObjectName: title,
    FNumber,
    ISO,
    Model,
    FocalLength,
    CreateDate,
    Make,
  } = exif;

  return {
    createdAt: CreateDate,
    exposureTime: getExposureTime(exif?.ExposureTime),
    focalLength: FocalLength,
    fStop: FNumber,
    ISO,
    model: Model,
    // Exifr library returns strings in latin1, but I need UTF-8 for text accents.
    title: Buffer.from(title ?? '', 'latin1').toString(),
    make: Make,
  };
};

export default getImageExif;
