import useImageSize from "../../hooks/useImageSize";
import { ImageWrapper, Description, BorderedImage } from "./styles";
import { EXIF } from "../../models/index";
import useExifString from "../../hooks/useExifString";
import { Paragraph } from "../../theme/";

interface FullImageProps {
  orientation: string;
  ratio: string;
  maxSize: number;
  src: string;
  description: string;
  exif: EXIF;
}

export const FullImage = ({
  orientation,
  ratio,
  maxSize,
  src,
  description,
  exif,
}: FullImageProps) => {
  const [height, width] = useImageSize({ orientation, ratio, maxSize });
  const metadata = useExifString(exif);

  return (
    <ImageWrapper>
      <BorderedImage src={src} height={height} width={width} />
      <Description maxWidth={width}>
        <Paragraph>{metadata}</Paragraph>
        <Paragraph>{description}</Paragraph>
      </Description>
    </ImageWrapper>
  );
};
