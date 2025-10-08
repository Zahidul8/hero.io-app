import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import AllApp from "../Pages/AllApp";
import Installation from "../Pages/Installation";
import AppDetails from "../Pages/AppDetails";
import ErrorPage from "../Pages/ErrorPage";
import NotFoundApp from "../Pages/NotFoundApp";

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
      },
      {
        path: '/apps/:id',
        Component: AppDetails,
       
      },
      {
        path: '*',
        Component: ErrorPage,
      }
    ]
  },
]);

export default router;