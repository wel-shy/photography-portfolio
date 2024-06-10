import styled from "styled-components";
import useImageExif from "./useImageExif";
import NavBar from "../NavBar";

const url =
  "https://welshy-cdn.fra1.cdn.digitaloceanspaces.com/20240322-Andover%20-%20London.jpg";

const Image = styled.img`
  width: 100%;
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
      <NavBar LeftDetail={null} />
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
