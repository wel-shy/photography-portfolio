import React from 'react';
import styled from 'styled-components';
import { getImageLocation } from '../../lib/describeImage';
import { Exif } from '../../lib/types';
import useExifDetails from './useExifDetails';

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

  .image-location {
    font-style: italic;
    margin-bottom: 0.25em;
  }

  .image-caption {
    margin: 1em 0 0;
  }
`;

interface Props {
  exif: Exif | null;
}

const ExifDetails = ({ exif }: Props) => {
  const { camera, focalLength, detailsString } = useExifDetails({
    exif,
  });

  const location = getImageLocation(exif);

  if (!exif) {
    return null;
  }

  return (
    <ExifWrapper>
      <div className="image-title">{exif.title}</div>
      {location && <div className="image-location">{location}</div>}
      <div>{camera}</div>
      <div>{detailsString}</div>
      <div>{focalLength}</div>
      {exif.caption && <p className="image-caption">{exif.caption}</p>}
    </ExifWrapper>
  );
};

export default ExifDetails;
