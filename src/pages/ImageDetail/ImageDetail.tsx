import React from 'react';
import styled from 'styled-components';
import { data } from 'react-router';
import ExifDetails from './ExifDetails';
import BasePage from '../../components/BasePage/BasePage';
import { getImage } from '../../lib/collections.server';
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
  const title = loaderData?.image.exif?.title || null;

  return pageMeta({
    pathname: location.pathname,
    title: title ?? 'Photo',
    description: title
      ? `${title}, photographed by Daniel Welsh.`
      : 'A photograph by Daniel Welsh.',
  });
};

const ImageDetail = ({ loaderData }: Route.ComponentProps) => {
  const { url, exif } = loaderData.image;
  const title = exif?.title || null;

  return (
    <BasePage>
      <ImageDetailsWrapper>
        <ImageContainer>
          <StyledImage src={url} alt={title ?? ''} />
        </ImageContainer>

        <DetailsContainer>
          <ExifDetails exif={exif} />
        </DetailsContainer>
      </ImageDetailsWrapper>
    </BasePage>
  );
};

export default ImageDetail;
