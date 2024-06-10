import styled from "styled-components";
import useImageExif from "./useImageExif";

const url =
  "https://welshy-cdn.fra1.cdn.digitaloceanspaces.com/20240322-Andover%20-%20London.jpg";

const Image = styled.img`
  width: calc(100% - 4em);
  border: 2em solid white;
`;

const ExifWrapper = styled.div`
  margin-top: 1em;
  text-align: right;

  .fstop-label {
    font-style: italic;
  }
`;

const ImageDetail = () => {
  const { exif } = useImageExif(url);

  return (
    <div>
      <Image src={url} alt="" />
      {exif && (
        <ExifWrapper>
          <div>{exif.Model}</div>
          <div>
            {exif.ExposureTime} / <span className="fstop-label">f</span>
            {exif.FNumber} / ISO {exif.ISO}
          </div>
          <div>{exif.FocalLength}mm</div>
        </ExifWrapper>
      )}
    </div>
  );
};

export default ImageDetail;
