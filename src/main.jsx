import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./components/Layout/Root/Root.jsx";
import Home from "./components/Pages/Home/Home.jsx";
import Login from "./components/Pages/Login/Login.jsx";
import AuthProvider from "./components/Provider/Provider.jsx";
import { HelmetProvider } from "react-helmet-async";
import Register from "./components/Pages/Register/Register.jsx";
import Add from "./components/Pages/Dashboard/Add/Add.jsx";
import Allmeal from "./components/Pages/Allmeal/Allmeal.jsx";
import PrivateRoute from "./components/Route/PrivateRoute/PrivateRoute.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Details from "./components/Pages/Details/Details.jsx";
import Dashboard from "./components/Layout/Root/Dashboard.jsx";
import Allmeals from "./components/Pages/Dashboard/Allmeals/Allmeals.jsx";
import Alluser from "./components/Pages/Dashboard/Alluser/Alluser.jsx";
import Payment from "./components/Pages/Dashboard/Payment/Payment.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },

      {
        path: "/meal",
        element: <Allmeal></Allmeal>,
      },
      {
        path: "/meal/:_id",
        loader: () => fetch("http://localhost:5000/meal"),
        element: <Details></Details>,
      },
    ],
  },

  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),

    children: [
      {
        path: "/dashboard/add",
        element: <Add></Add>,
      },
      {
        path: "/dashboard/allmeals",
        element: <Allmeals></Allmeals>,
      },
      {
        path: "/dashboard/manusers",
        element: <Alluser></Alluser>,
      },
      {
        path: "/dashboard/payment/:membership",
        element: <Payment></Payment>,
      },
    ],
  },
]);
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
