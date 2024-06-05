import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Blogs from "../pages/Blogs";
import AddBook from "../pages/dashboard/AddBook";
import Booklist from '../pages/dashboard/Booklist';
import Categorylist from "../pages/dashboard/Categorylist";
import EditBook from "../pages/dashboard/EditBook";
import DashboardLayout from "./../layout/DashboardLayout";
import About from "./../pages/About";
import DashboardHome from "./../pages/dashboard/DashboardHome";
import EditProfile from './../pages/dashboard/EditProfile';
import Home from "./../pages/Home";
import Login from "./../pages/Login";
import Register from "./../pages/Register";
import PrivateRoute from "./PrivateRoute";

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
      {
        path: "profile/edit/:id",
        element: <EditProfile/>,
        loader: ({params})=>{
         return fetch(`https://bookshop-backend-x3im.onrender.com/user/get/${params.id}`)
        }
      },
    ],
  },
]);
