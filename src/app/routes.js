import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Products from "../pages/Products";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/productos", element: <Products /> },
  { path: "/contacto", element: <Contact /> },
];

export default routes;
