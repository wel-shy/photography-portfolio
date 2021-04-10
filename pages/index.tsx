import { Header } from "../components/Header";
import { Gallery } from "../components/Gallery/index";
import images from "../data/images.json";
import { PageWrapper } from "../components/PageWrapper";
import { GalleryProvider } from "../components/Contexts/GalleryContext";

export default () => (
  <PageWrapper pageTitle="Daniel Welsh | Photography">
    <>
      <Header />
      <GalleryProvider>
        <Gallery items={images} />
      </GalleryProvider>
    </>
  </PageWrapper>
);
