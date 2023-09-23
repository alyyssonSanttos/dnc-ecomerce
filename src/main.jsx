import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from "./assets/views/Login/Login";
import Home from "./assets/views/Home/Home";
import Products from './assets/views/Products/Products';
import Pay from "./assets/views/Pay/Pay";
import { PRODUCTS_MOCK } from "./mock/products.mock";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/home",
    element: <Home data={PRODUCTS_MOCK} />,
  },
  {
    path: "/products/:productId",
    element: <Products data={PRODUCTS_MOCK} />,
  },
  {
    path: "/pay/:payId",
    element: <Pay data={PRODUCTS_MOCK} />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
