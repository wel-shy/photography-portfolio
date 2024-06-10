import React from "react";
import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";
import { RouterProvider } from "react-router-dom";
import Router from "./Router";
import { CollectionsProvider } from "./contexts/CollectionsContext";

const Main = styled.main``;

function App() {
  return (
    <CollectionsProvider>
      <GlobalStyle />
      <div className="App">
        <Main>
          <RouterProvider router={Router} />
        </Main>
      </div>
    </CollectionsProvider>
  );
}

export default App;
