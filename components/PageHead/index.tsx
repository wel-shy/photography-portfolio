import Head from "next/head";

interface PageHeadProps {
  title: string;
}

export const PageHead = ({ title }: PageHeadProps) => (
  <Head>
    <title>{title}</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>
);
