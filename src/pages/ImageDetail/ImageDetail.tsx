import React from 'react';
import styled from 'styled-components';
import { data } from 'react-router';
import ExifDetails from './ExifDetails';
import BasePage from '../../components/BasePage/BasePage';
import { getImage } from '../../lib/collections.server';
import { getImageDescription, getImageName } from '../../lib/describeImage';
import pageMeta from '../../lib/pageMeta';
import type { Route } from './+types/ImageDetail';

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

export const loader = async ({ params }: Route.LoaderArgs) => {
  const image = await getImage(params.imageId);

  if (!image) {
    throw data(null, { status: 404 });
  }

  return { image };
};

export const meta = ({ loaderData, location }: Route.MetaArgs) => {
  const exif = loaderData?.image.exif ?? null;

  return pageMeta({
    pathname: location.pathname,
    image: loaderData?.image,
    title: getImageName(exif) ?? 'Photo',
    description: getImageDescription(exif),
  });
};

const ImageDetail = ({ loaderData }: Route.ComponentProps) => {
  const { url, exif } = loaderData.image;

  return (
    <BasePage>
      <ImageDetailsWrapper>
        <ImageContainer>
          <StyledImage src={url} alt={getImageName(exif) ?? ''} />
        </ImageContainer>

        <DetailsContainer>
          <ExifDetails exif={exif} />
        </DetailsContainer>
      </ImageDetailsWrapper>
    </BasePage>
  );
};

export default ImageDetail;
