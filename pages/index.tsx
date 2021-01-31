import { Header } from "../components/Header";
import { Gallery } from "../components/Gallery/index";
import images from "../data/images.json";
import { PageWrapper } from "../components/PageWrapper";

export default () => (
  <PageWrapper pageTitle="Daniel Welsh | Photography">
    <>
      <Header />
      <Gallery items={images} />
    </>
  </PageWrapper>
);
