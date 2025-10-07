import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutUs from "../pages/AboutUs";
import Contacts from "../pages/Contacts";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/about", element: <AboutUs /> },
  { path: "/contacts", element: <Contacts /> }
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
