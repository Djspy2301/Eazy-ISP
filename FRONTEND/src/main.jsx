import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { SignUp } from "./components/index.js";

import Laout from "./components/Layouts/Laout.jsx";
import Plans from "./components/Plan/Plans.jsx";
import Subscription from "./components/Sub/Subscriptions.jsx";
import Profile from "./components/Dashboard/Profile.jsx";
import ReportIssue from "./components/Report/ReportIssue.jsx";
import Subscribers from "./components/Sub/Subscribers.jsx";
import AddMember from "./components/Sub/AddMember.jsx";
import AddPlan from "./components/Plan/AddPlan.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUp />,
  },
  {
    path: "*",
    element:<>Page Not Found</>
  },
  {
    path: "/user",
    element: <Laout />,
    children: [
      {
        path: "/user/profile",
        element: <Profile />,
      },
      {
        path: "/user/plans",
        element: <Plans/>
      },
      {
        path: "/user/subscription",
        element: <Subscription/>
      },
      {
        path: "/user/report",
        element: <ReportIssue/>
      },
      
    ],
  },
  {
    path: "/admin",
    element: <Laout />,
    children: [
      {
        path: "/admin/profile",
        element: <Profile />,
      },
      {
        path: "/admin/add-plans",
        element: <AddPlan/>
      },
      {
        path: "/admin/subscribers",
        element: <Subscribers/>,
      },
      {
        path:"/admin/subscribers/add-member",
        element:<AddMember/>
      },
      {
        path: "/admin/issues",
        
      },
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      
        <RouterProvider router={router} />
      
  </React.StrictMode>
);
