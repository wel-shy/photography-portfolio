import styled from "styled-components";
import useImageExif from "./useImageExif";

const ExifWrapper = styled.div`
  margin-top: 1em;
  text-align: right;
  flex: 1;

  .fstop-label {
    font-style: italic;
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
      <div>{exif.Model}</div>
      <div>
        {exif.ExposureTime} / <span className="fstop-label">f</span>
        {exif.FNumber} / ISO {exif.ISO}
      </div>
      <div>{exif.FocalLength}mm</div>
    </ExifWrapper>
  );
};

export default ExifDetails;
