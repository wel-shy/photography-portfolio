import useImageSize from "../../hooks/useImageSize";
import { ImageWrapper, Description, BorderedImage } from "./styles";

interface FullImageProps {
  orientation: string;
  ratio: string;
  maxSize: number;
  src: string;
  description: string;
}

export const FullImage = ({
  orientation,
  ratio,
  maxSize,
  src,
  description,
}: FullImageProps) => {
  const [height, width] = useImageSize({ orientation, ratio, maxSize });

  return (
    <ImageWrapper>
      <BorderedImage src={src} height={height} width={width} />
      <Description maxWidth={width}>{description}</Description>
    </ImageWrapper>
  );
};
