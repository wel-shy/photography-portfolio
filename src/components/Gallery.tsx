import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Image } from '../lib/types';

interface GalleryProps {
  images: Image[];
}

const Grid = styled.div`
  display: grid;
  width: 100%;
  grid-gap: 2em;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`;

const GridItem = styled.img<{ isPano?: boolean }>`
  aspect-ratio: ${({ isPano }) => (isPano ? '2/1' : '1/1')};
  grid-column: span ${({ isPano }) => (isPano ? 2 : 1)};
  height: 100%;
  object-fit: cover;
  transition: all ease 0.5s;
  width: 100%;

  &:hover {
    box-shadow:
      11px 12px 18px -5px rgba(0, 0, 0, 0.1),
      0px 10px 15px -3px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
`;

const Gallery = ({ images }: GalleryProps) => (
  <section>
    <Grid>
      {images.map(({ url, id }) => (
        <Link to={`/images/${id}`} key={id}>
          <GridItem key={url} className="grid-item" alt="" src={url} />
        </Link>
      ))}
    </Grid>
  </section>
);

export default Gallery;
