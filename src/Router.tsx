import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import Collection from "./components/Collection/Collection";
import ImageDetail from "./components/ImageDetail/ImageDetail";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Collection />,
  },
  {
    path: "/collections/:id",
    element: <Collection />,
  },
  {
    path: "/images/:imageId",
    element: <ImageDetail />,
  },
]);

export default Router;
