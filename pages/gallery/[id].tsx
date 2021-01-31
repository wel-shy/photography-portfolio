import images from "../../data/images.json";
import { GetStaticProps, GetStaticPaths } from "next";
import { Container } from "../../theme";
import { FullImage } from "../../components/FullImage";
import { EXIF } from "../../models";
import { PageWrapper } from "../../components/PageWrapper";

interface GalleryImageProps {
  image: {
    title: string;
    link: string;
    id: string;
    full: string;
    orientation: string;
    ratio: string;
    exif: EXIF;
    description: string;
  };
}

const maxImageSize = 1000;

function GalleryImage({ image }: GalleryImageProps) {
  return (
    <PageWrapper pageTitle={`Daniel Welsh | Photography - ${image.title}`}>
      <Container>
        <h1>{image.title}</h1>
        <FullImage
          src={image.full}
          ratio={image.ratio}
          orientation={image.orientation}
          maxSize={maxImageSize}
          description={image.description}
          exif={image.exif}
        />
      </Container>
    </PageWrapper>
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
