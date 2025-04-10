import React from 'react';
import styled from 'styled-components';
import { RouterProvider } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Router from './Router';
import { CollectionsProvider } from './contexts/CollectionsContext';
import Footer from './components/Footer';
import { PreferencesProvider } from './contexts/PreferencesContext/PreferencesContext';
import ThemeProviderWrapper from './components/ThemeProviderWrapper/ThemeProviderWrapper';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 4em);
`;

const Main = styled.main`
  flex: 1;
`;

const App = () => {
  return (
    <PreferencesProvider>
      <CollectionsProvider>
        <ThemeProviderWrapper>
          <GlobalStyle />
          <Container>
            <Main>
              <RouterProvider router={Router} />
            </Main>
            <Footer />
          </Container>
        </ThemeProviderWrapper>
      </CollectionsProvider>
    </PreferencesProvider>
  );
};

export default App;
