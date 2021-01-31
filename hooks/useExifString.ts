import { EXIF } from "../models/index";
const useExifString = ({ iso, shutter, apeture, focalLength }: EXIF) =>
  [apeture, focalLength, shutter, iso ? `ISO ${iso}` : undefined]
    .filter((x) => x)
    .join(" | ");

export default useExifString;
