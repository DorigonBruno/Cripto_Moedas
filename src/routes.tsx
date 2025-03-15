import { createBrowserRouter } from "react-router";
import Home from "./pages/home/Home";
import Detail from "./pages/detail/Detail";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/notfound/NotFound";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/detail/:id",
        element: <Detail />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export { router };
