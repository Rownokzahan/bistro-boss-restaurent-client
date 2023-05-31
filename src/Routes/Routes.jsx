import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../Layouts/Dashboard";
import Dashboard_Home from "../pages/Dashboard/Home/Home"
import MyCart from "../pages/Dashboard/MyCart/MyCart";
import PrivateRoute from "./PrivateRoute";
import Users from "../pages/Dashboard/Users/Users";
import AddFood from "../pages/Dashboard/AddFood/AddFood";
import AdminRoute from "./AdminRoute";
import ManageFood from "../pages/Dashboard/ManageFood/ManageFood";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/menu",
        element: <Menu />,
      },

      {
        path: "/order/:category",
        element: <Order />,
      },

      {
        path: "/login",
        element: <Login />,
      },

      {
        path: "/register",
        element: <Register />,
      },
    ],
  },

  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "",
        element: <Dashboard_Home />,
      },
      {
        path: "my-cart",
        element: <MyCart />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "add-food",
        element: (
          <AdminRoute>
            <AddFood />
          </AdminRoute>
        ),
      },
      {
        path: "foods",
        element: (
          <AdminRoute>
            <ManageFood />
          </AdminRoute>
        ),
      },
    ],
  },
]);
