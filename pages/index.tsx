import { Footer } from "../components/Footer/index";
import { Header } from "../components/Header";
import { Gallery } from "../components/Gallery/index";
import images from "../data/images.json";
import { PageHead } from "../components/PageHead";
import { Main } from "../theme";

export default function Home() {
  return (
    <div>
      <PageHead />
      <Main>
        <Header />
        <Gallery items={images} />
      </Main>
      <Footer />
    </div>
  );
}
