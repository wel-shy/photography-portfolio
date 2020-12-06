import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Footer } from "../components/Footer/index";
import { Header } from "../components/Header";
import { Gallery } from "../components/Gallery/index";
import images from "../data/images.json";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Daniel Welsh Photography</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />
        <Gallery items={images} />
      </main>
      <Footer />
    </div>
  );
}
