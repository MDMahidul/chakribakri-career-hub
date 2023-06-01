import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from '../src/components/Home/Home.jsx'
import {jobsAndCartData} from './loaders/getCartsandjobData.js'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: jobsAndCartData,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router}></RouterProvider>
  </>,
)
