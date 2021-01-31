import React from "react";
import { Main } from "../../theme";
import { Footer } from "../Footer";
import { NavigationBar } from "../NavigationBar";
import { PageHead } from "../PageHead";

interface PageWrapperProps {
  pageTitle: string;
  children: JSX.Element;
}

export const PageWrapper = ({ children, pageTitle }: PageWrapperProps) => (
  <>
    <PageHead title={pageTitle} />
    <Main>
      <NavigationBar />
      {children}
    </Main>
    <Footer />
  </>
);
