import { createBrowserRouter } from "react-router-dom";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>An error occured</h1>,
    children: [
      { index: true, element: <HomePage /> },
      { path: "whats-on", element: <ExhibitionPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "visit", element: <VisitPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "artist/:id", element: <ArtistPage /> },
      { path: "news-and-events", element: <NewsAndEventsPage /> },
      { path: "archive", element: <ExhibitionsArchivePage /> },
      { path: "press", element: <PressPage /> },
      { path: "search", element: <SearchResultsPage /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
]);
