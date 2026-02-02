import { createBrowserRouter } from "react-router-dom";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>An error occured</h1>,
    children: [
      {index: true, element: },
      {path: "contactpage", element: ContactPage},
      {path: "art/:artId", element: ArtPage},
      {path: "artist/:artistId", element: ArtistPage},
      {path: "searchresult", element: SearchResultPage},
{path: }
      {path: "*", element: ErrorPage}
    ]
  },
]);
