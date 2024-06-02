import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Home from "./../pages/Home";
import About from "./../pages/About";
import Blogs from "../pages/Blogs";
import Login from "./../pages/Login";
import Register from "./../pages/Register";
import DashboardLayout from "./../layout/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import DashboardHome from "./../pages/dashboard/DashboardHome";
import Booklist from '../pages/dashboard/Booklist';
import Categorylist from "../pages/dashboard/Categorylist";
import AddBook from "../pages/dashboard/AddBook";
import EditBook from "../pages/dashboard/EditBook";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: "book-list",
        element: <Booklist />,
      },
      {
        path: "category-list",
        element: <Categorylist />,
      },
      {
        path: "add-book",
        element: <AddBook />,
      },
      {
        path: "edit-book/:id",
        element: <EditBook/>,
      },
    ],
  },
]);
