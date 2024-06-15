import { useEffect, useState } from "react";
import getImageExif, { ExifData } from "../../getImageExif";

const useImageDetails = (url: string | undefined) => {
  const [exif, setExif] = useState<ExifData | null>(null);

  const setImageExif = async (url: string | undefined) => {
    if (!url) {
      return;
    }

    const exif = await getImageExif(url);
    setExif(exif);
  };

  useEffect(() => {
    setImageExif(url);
  }, [url]);

  return { exif };
};

export default useImageDetails;
