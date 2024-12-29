import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";

import { About, Contact, GitHub, githubInfoLoader, Home, Layout, User } from "./index";

const root = document.getElementById("root");
//Method-1
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "/about",
//         element: <About />,
//       },
//     ],
//   },
// ]);

//Method-2
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userId" element={<User />} />
      <Route 
      loader = {githubInfoLoader}
      path="github" 
      element={<GitHub />} />
    </Route>
  )
);
ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
