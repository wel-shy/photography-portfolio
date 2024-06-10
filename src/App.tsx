import React from "react";
import GlobalStyle from "./GlobalStyle";
import NavigationPanel from "./components/NavigationPanel";
import styled from "styled-components";
import { RouterProvider } from "react-router-dom";
import Router from "./Router";
import { CollectionsProvider } from "./contexts/CollectionsContext";

const Main = styled.main`
  display: flex;
  gap: 2em;
`;

function App() {
  return (
    <CollectionsProvider>
      <GlobalStyle />
      <div className="App">
        <header>
          <h1 className="title">Daniel Welsh</h1>
          <h2 className="subtitle">Photography</h2>
        </header>
        <Main>
          <NavigationPanel />
          <RouterProvider router={Router} />
        </Main>
      </div>
    </CollectionsProvider>
  );
}

export default App;
