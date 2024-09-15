import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import './styles/index.css'
import SearchBar from './components/SearchBar.jsx';
import Profile from './Profile.jsx';
import ErrorPage from './ErrorPage.jsx';
import Item from './Item.jsx';


const router = createBrowserRouter([
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
  {
    path: "/item",
    element: <Item></Item>,
  },
  {
    path: "/products",
    element: <App />,
  },
  {
    path: "/",
    element: <Profile/>,
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
