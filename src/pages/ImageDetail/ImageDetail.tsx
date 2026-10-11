import React from 'react';
import styled from 'styled-components';
import { Link, data } from 'react-router';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import ExifDetails from './ExifDetails';
import BasePage from '../../components/BasePage/BasePage';
import { getImage } from '../../lib/collections.server';
import { getImageDescription, getImageName } from '../../lib/describeImage';
import pageMeta from '../../lib/pageMeta';
import { getImageStructuredData } from '../../lib/structuredData';
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

const ImageNav = styled.nav`
  display: flex;
  justify-content: space-between;
  gap: 1em;
  margin-bottom: 1.5em;

  /* Keeps the collection centred when there is no previous or next image */
  > * {
    flex: 1;
  }

  .collection {
    text-align: center;
  }

  .next {
    text-align: right;
  }

  /* Centres the arrows on the text beside them */
  a {
    display: inline-flex;
    align-items: center;
    gap: 0.4em;
  }
`;

export const loader = async ({ params }: Route.LoaderArgs) => {
  const result = await getImage(params.imageId);

  if (!result) {
    throw data(null, { status: 404 });
  }

  const { image, collection, previous, next } = result;
  const getLink = (neighbour: typeof image | null) =>
    neighbour && {
      link: `/images/${neighbour.id}`,
      name: getImageName(neighbour.exif),
    };

  return {
    image,
    collection,
    previous: getLink(previous),
    next: getLink(next),
  };
};

export const meta = ({ loaderData, location }: Route.MetaArgs) => {
  const exif = loaderData?.image.exif ?? null;

  return pageMeta({
    pathname: location.pathname,
    image: loaderData?.image,
    title: getImageName(exif) ?? 'Photo',
    description: getImageDescription(exif),
    structuredData: loaderData
      ? [getImageStructuredData(loaderData.image, location.pathname)]
      : [],
  });
};

const ImageDetail = ({ loaderData }: Route.ComponentProps) => {
  const { image, collection, previous, next } = loaderData;
  const { url, exif } = image;

  return (
    <BasePage>
      <ImageNav aria-label="More photos">
        <div>
          {previous && (
            <Link
              to={previous.link}
              rel="prev"
              title={previous.name ?? undefined}
            >
              <ArrowLeftOutlined aria-hidden />
              Previous
            </Link>
          )}
        </div>
        <div className="collection">
          <Link to={collection.link}>{collection.title}</Link>
        </div>
        <div className="next">
          {next && (
            <Link to={next.link} rel="next" title={next.name ?? undefined}>
              Next
              <ArrowRightOutlined aria-hidden />
            </Link>
          )}
        </div>
      </ImageNav>

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
