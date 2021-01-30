import { Footer } from "../../components/Footer";
import images from "../../data/images.json";
import { GetStaticProps, GetStaticPaths } from "next";
import { Container } from "../../theme";
import { PageHead } from "../../components/PageHead/";
import { FullImage } from "../../components/FullImage";
import { Main } from "../../theme/";

interface GalleryImageProps {
  image: {
    title: string;
    link: string;
    id: string;
    full: string;
    orientation: string;
    ratio: string;
  };
}

const maxImageSize = 1000;
const dummyDescription =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

function GalleryImage({ image }: GalleryImageProps) {
  return (
    <div>
      <PageHead />
      <Main>
        <Container>
          <h1>{image.title}</h1>
          <FullImage
            src={image.full}
            ratio={image.ratio}
            orientation={image.orientation}
            maxSize={maxImageSize}
            description={dummyDescription}
          />
        </Container>
      </Main>
      <Footer />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params;
  const image = images.find(({ id: imageId }) => id == imageId);

  if (!image) {
    return { notFound: true };
  }

  return { props: { image } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [...new Set(images.map(({ id }) => id))].map((id) => ({
      params: { id },
    })),
    fallback: false,
  };
};

export default GalleryImage;
