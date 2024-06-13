import React from "react";
import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";
import { RouterProvider } from "react-router-dom";
import Router from "./Router";
import { CollectionsProvider } from "./contexts/CollectionsContext";
import Footer from "./components/Footer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 4em);
`;

const Main = styled.main`
  flex: 1;
`;

function App() {
  return (
    <CollectionsProvider>
      <GlobalStyle />
      <Container>
        <Main>
          <RouterProvider router={Router} />
        </Main>
        <Footer />
      </Container>
    </CollectionsProvider>
  );
}

export default App;
