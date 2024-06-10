import styled from "styled-components";
import { Image } from "../contexts/CollectionsContext";

interface GalleryProps {
  images: Image[];
}

const Grid = styled.div`
  display: grid;
  width: 100%;
  grid-gap: 2em;
  grid-template-columns: 1fr 1fr 1fr;
`;

const GridItem = styled.img<{ isPano: boolean }>`
  aspect-ratio: ${({ isPano }) => (isPano ? "2/1" : "1/1")};
  grid-column: span ${({ isPano }) => (isPano ? 2 : 1)};
  height: 100%;
  object-fit: cover;
  transition: all ease 0.5s;
  width: 100%;

  &:hover {
    box-shadow: 11px 12px 18px -5px rgba(0, 0, 0, 0.1),
      0px 10px 15px -3px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
`;

const Gallery = ({ images }: GalleryProps) => (
  <section>
    <Grid>
      {images.map(({ url }, idx) => (
        <a href={`/images/id}`}>
          <GridItem
            key={url}
            isPano={!!(idx % 2)}
            className="grid-item"
            alt=""
            src={url}
          />
        </a>
      ))}
    </Grid>
  </section>
);

export default Gallery;
