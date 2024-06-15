import styled from "styled-components";
import useImageExif from "./useImageExif";

const ExifWrapper = styled.div`
  margin-top: 1em;
  text-align: right;
  flex: 1;

  .fstop-label {
    font-style: italic;
  }

  .image-title {
    font-size: 1.25em;
    font-style: italic;
    font-weight: 700;
    margin-bottom: 0.25em;
  }
`;

interface Params {
  imageUrl: string | undefined;
}

const ExifDetails = ({ imageUrl }: Params) => {
  const { exif } = useImageExif(imageUrl);

  if (!exif) {
    return null;
  }

  return (
    <ExifWrapper>
      <div className="image-title">{exif.title}</div>
      <div>{exif.model}</div>
      <div>
        {exif.exposureTime} / <span className="fstop-label">f</span>
        {exif.fStop} / ISO {exif.ISO}
      </div>
      <div>{exif.focalLength}mm</div>
    </ExifWrapper>
  );
};

export default ExifDetails;
