import styled from "styled-components";
import { Paragraph } from "../../theme/Text/index";
import Image from "next/image";

export const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const ImageContainer = styled.div`
  width: 100%;
  flex: 1;
  flex: grow;
`;

const TImage = styled(Image)`
  flex: 1;
  min-width: 500px;
  flex-basis: 100%;
`;

const ImageBorder = styled.div`
  border: 3rem solid white;
`;

interface BorderImageProps {
  height: number;
  width: number;
  src: string;
}

export const BorderedImage = (props: BorderImageProps) => (
  <ImageBorder>
    <TImage {...props} objectFit="cover" />
  </ImageBorder>
);

interface DescriptionProps {
  maxWidth: number;
}

export const Description = styled(Paragraph)<DescriptionProps>`
  flex: 2;
  min-width: 400px;
  max-width: ${({ maxWidth }) => maxWidth}px;
  padding: 2.5%;
`;
