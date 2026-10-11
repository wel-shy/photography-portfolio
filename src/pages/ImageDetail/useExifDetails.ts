import { useMemo } from 'react';
import { Exif } from '../../lib/types';

const ignoredMakes = ['Canon'];

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

interface Params {
  exif: Exif | null;
}

const useExifDetails = ({ exif }: Params) => {
  const details = useMemo(() => {
    if (!exif) {
      return null;
    }

    const make = ignoredMakes.includes(exif?.make ?? '') ? null : exif?.make;

    return {
      camera: `${make ?? ''} ${exif?.model ?? ''}`.trim(),
      fStop: exif?.fStop ? `f${exif?.fStop}` : null,
      focalLength: exif?.focalLength ? `${exif?.focalLength}mm` : null,
      iso: `ISO ${exif?.ISO}`,
    };
  }, [exif]);

  return {
    camera: details?.camera,
    focalLength: details?.focalLength,
    detailsString: [
      getExposureTime(exif?.exposureTime ?? null),
      details?.fStop,
      details?.iso,
    ]
      .filter((el) => !!el)
      .join(' / '),
  };
};

export default useExifDetails;
