import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout";
import { AboutPage } from "../pages/AboutPage";
import { ContactPage } from "../pages/ContactPage";
import { HomePage } from "../pages/HomePage";
import { WorksPage } from "../pages/WorksPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "works", element: <WorksPage /> },
    ],
  },
]);
