import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import AllApp from "../Pages/AllApp";
import Installation from "../Pages/Installation";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        path: '/',
        Component: Home,
      },
      {
        path:'/allapp',
        Component: AllApp,
      },
      {
        path: '/installation',
        Component: Installation,
      }
    ]
  },
]);

export default router;