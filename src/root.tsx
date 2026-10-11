import React, { ReactNode } from 'react';
import styled from 'styled-components';
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError,
} from 'react-router';
import '@fontsource-variable/bitter';
import '@fontsource-variable/bitter/wght-italic.css';
import GlobalStyle from './GlobalStyle';
import BasePage from './components/BasePage/BasePage';
import Footer from './components/Footer';
import { PreferencesProvider } from './contexts/PreferencesContext/PreferencesContext';
import { getCollections } from './lib/collections.server';
import pageMeta from './lib/pageMeta';
import type { Route } from './+types/root';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 4em);
`;

const Main = styled.main`
  flex: 1;
`;

export const loader = async () => {
  const collections = await getCollections();

  return {
    collectionLinks: collections.map(({ id, title }) => ({
      id,
      title,
      link: `/collections/${id}`,
    })),
  };
};

// Pages replace these with their own, see pageMeta
export const meta = ({ location }: Route.MetaArgs) =>
  pageMeta({ pathname: location.pathname });

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="manifest" href="/manifest.json" />
        <meta property="og:site_name" content="Daniel Welsh Photography" />
        <meta property="og:type" content="website" />
        <Meta />
        <Links />
      </head>
      <body>
        <PreferencesProvider>
          <GlobalStyle />
          <Container>
            <Main>{children}</Main>
            <Footer />
          </Container>
        </PreferencesProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
};

export const ErrorBoundary = () => {
  const error = useRouteError();
  const isNotFound = isRouteErrorResponse(error) && error.status === 404;

  return (
    <BasePage>
      <h2>{isNotFound ? 'Page not found' : 'This page could not be loaded'}</h2>
    </BasePage>
  );
};

const App = () => {
  return <Outlet />;
};

export default App;
