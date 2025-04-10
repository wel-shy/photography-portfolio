import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import ImageDetail from "./pages/ImageDetail/ImageDetail";
import ContactPage from "./pages/ContactPage/ContactPage";
import Collection from "./pages/Collection/Collection";

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
  {
    path: "/contact",
    element: <ContactPage/>
  }
]);

export default Router;
