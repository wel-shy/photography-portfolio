import styled from "styled-components";
import { useParams } from "react-router-dom";
import useImage from "./useImage";
import ExifDetails from "./ExifDetails";
import BasePage from "../BasePage/BasePage";

const ImageDetailsWrapper = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

const StyledImage = styled.img`
  max-width: 100%;
  max-height: 75vh;
`;

const ImageContainer = styled.div`
  max-height: 75vh;
  flex: 3;
`;

const DetailsContainer = styled.div`
  flex: 1;
  padding-left: 1em;
  display: flex;
  flex-direction: column;

  .text-wrapper {
    height: 100%;
  }

  h2 {
    font-weight: 400;
  }
`;

const ImageDetail = () => {
  const { imageId } = useParams();
  const { url, exif } = useImage(imageId) ?? {
    url: undefined,
  };

  return (
    <BasePage>
      <ImageDetailsWrapper>
        <ImageContainer>
          <StyledImage src={url} alt="" />
        </ImageContainer>

        <DetailsContainer>
          <ExifDetails exif={exif ?? null} />
        </DetailsContainer>
      </ImageDetailsWrapper>
    </BasePage>
  );
};

export default ImageDetail;
