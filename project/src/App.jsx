import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import { Home } from "./pages/Home";
import { Applayout } from "./components/layout/Applayout";
import About from './pages/About';

// or wherever it lives in your project

import { ErrorPage } from "./pages/ErrorPage";
import Policies from './pages/Policies';

// ✅ Only this service page for now
import Cloudbi from './pages/services/Cloudbi';
import Dataanalysis from "./pages/services/Dataanalysis";
import Corporatetraining from "./pages/services/Corporatetraining";
import Dataintegration from "./pages/services/Dataintegration";
import Datamangement from "./pages/services/Datamangement";
import Application from "./pages/services/Application";
import Timepass from "./pages/services/Timepass";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
    
      { path: "policies", element: <Policies /> },

      // ✅ Cloud BI Page Route
      { path: "services/cloudbi", element: <Cloudbi /> },
       {path : "services/Dataanalysis",element:<Dataanalysis/>},
        {path : "services/Corporatetraining",element:<Corporatetraining/>},
          {path : "services/Dataintegration",element:<Dataintegration/>},
            {path : "services/Datamangement",element:<Datamangement/>},
             {path : "services/Application",element:<Application/>},
              {path : "services/Timepass",element:<Timepass/>},
    ]
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
