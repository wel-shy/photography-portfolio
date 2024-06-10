import { parse } from "exifr";
import { SetStateAction, useEffect, useState } from "react";

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

type ExifData = Omit<ExifResult, "ExposureTime"> & {
  ExposureTime: string | null;
};

const getExposureTime = (exposureTime: number | null) => {
  if (!exposureTime) {
    return null;
  }

  if (exposureTime >= 1.0) {
    return `${exposureTime}s`;
  }

  const dom = 1000;
  const num = exposureTime * 1000;

  return `1/${dom / num}s`;
};

const getExif = async (
  url: string,
  setExif: (exif: SetStateAction<ExifData | null>) => void
) => {
  const exif = (await parse(url)) as ExifResult;
  const exposureTime = getExposureTime(exif.ExposureTime);

  setExif({ ...exif, ExposureTime: exposureTime });
};

const useImageDetails = (url: string) => {
  const [exif, setExif] = useState<ExifData | null>(null);

  useEffect(() => {
    getExif(url, setExif);
  }, [url]);

  return { exif };
};

export default useImageDetails;
