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
import Userprofile from "./components/Pages/Dashboard/Userprofile/Userprofile.jsx";
import Up from "./components/Pages/Dashboard/Up/Up.jsx";
import Useradmin from "./components/Pages/Dashboard/Useradmin/Useradmin.jsx";
import Upmeal from "./components/Pages/Upmeal/Upmeal.jsx";
import Upmealdash from "./components/Pages/Dashboard/Upmealdash/Upmealdash.jsx";
import Servemeal from "./components/Pages/Dashboard/Servemeal/Servemeal.jsx";
import Reqmeal from "./components/Pages/Dashboard/Reqmeal/Reqmeal.jsx";
import Update from "./components/Pages/Dashboard/Update/Update.jsx";
import Detailuser from "./components/Pages/Dashboard/Detailuser/Detailuser.jsx";
import Adminreview from "./components/Pages/Dashboard/Adminreview/Adminreview.jsx";
import Revdetail from "./components/Pages/Dashboard/Revdetail/Revdetal.jsx";
import Userrev from "./components/Pages/Dashboard/Userrev/Userrev.jsx";
import Uprev from "./components/Pages/Dashboard/Uprev/Uprev.jsx";
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
        path: "/mealup",
        element: <Upmeal></Upmeal>,
      },
      {
        path: "/meal/:_id",
        loader: () => fetch("https://uni-meal-server.vercel.app/meal"),
        element: <Details></Details>,
      },
      {
        path: "/meal/update/:_id",
        loader: ({ params }) =>
          fetch(`https://uni-meal-server.vercel.app/meal/${params._id}`),
        element: (
          <PrivateRoute>
            <Update></Update>
          </PrivateRoute>
        ),
      },
      {
        path: "/review/update/:_id",
        loader: ({ params }) =>
          fetch(`https://uni-meal-server.vercel.app/review/${params._id}`),
        element: (
          <PrivateRoute>
            <Uprev></Uprev>
          </PrivateRoute>
        ),
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
      {
        path: "/dashboard/Userprofile",
        element: <Userprofile></Userprofile>,
      },
      {
        path: "/dashboard/Useradmin",
        element: <Useradmin></Useradmin>,
      },
      {
        path: "/dashboard/Upmealdash",
        element: <Upmealdash></Upmealdash>,
      },
      {
        path: "/dashboard/serve",
        element: <Servemeal></Servemeal>,
      },
      {
        path: "/dashboard/reqmeal",
        element: <Reqmeal></Reqmeal>,
      },
      {
        path: "/dashboard/meal/:_id",
        loader: () => fetch("https://uni-meal-server.vercel.app/meal"),
        element: <Detailuser></Detailuser>,
      },
      {
        path: "/dashboard/adminreview",
        element: <Adminreview></Adminreview>,
      },
      {
        path: "/dashboard/review/:_id",
        loader: () => fetch("https://uni-meal-server.vercel.app/review"),
        element: <Revdetail></Revdetail>,
      },
      {
        path: "/dashboard/userreview",
        element: <Userrev></Userrev>,
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
