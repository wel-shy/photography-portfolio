import styled from 'styled-components';
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
`;

interface Props {
  exif: Exif | null;
}

const ExifDetails = ({ exif }: Props) => {
  const { camera, focalLength, detailsString } = useExifDetails({
    exif,
  });

  if (!exif) {
    return null;
  }

  return (
    <ExifWrapper>
      <div className="image-title">{exif.title}</div>
      <div>{camera}</div>
      <div>{detailsString}</div>
      <div>{focalLength}</div>
    </ExifWrapper>
  );
};

export default ExifDetails;
