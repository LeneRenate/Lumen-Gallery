import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import ExhibitionPage from "../pages/ExhibitionPage";
import AboutPage from "../pages/AboutPage";
import VisitPage from "../pages/VisitPage";
import ContactPage from "../pages/ContactPage";
import ArtistPage from "../pages/ArtistPage";
import NewsAndEventsPage from "../pages/NewsAndEventsPage";
import ExhibitionsArchivePage from "../pages/ExhibitionsArchivePage";
import PressPage from "../pages/PressPage";
import SearchResultsPage from "../pages/SearchResultsPage";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter(
  [
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
  ],
  {
    basename: "/Lumen-Gallery/",
  },
);
