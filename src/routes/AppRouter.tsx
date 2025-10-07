import { createBrowserRouter } from "react-router-dom";
import AppLayout from "@/App"; 
import HomePage from "@/pages/HomePage";
import AboutUs from "@/pages/AboutUs";
import Contacts from "@/pages/Contacts";
import NotFound from "@/pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />, // header, footer
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutUs /> },
      { path: "contacts", element: <Contacts /> },
      { path: "*", element: <NotFound /> }, 
    ],
  },
]);
