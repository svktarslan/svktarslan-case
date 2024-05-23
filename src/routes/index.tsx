import { createBrowserRouter } from "react-router-dom";
import Layout from "~/components/layout";
import Detail from "~/pages/detail";
import Home from "~/pages/home";
import News from "~/pages/news";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
      },
      {
        path: "/news/:newId",
        element: <News />,
      },
      {
        path: "/detail",
        element: <Detail />,
      },
    ],
  },
]);

export default routes;
