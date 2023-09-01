import { Children } from "react";
import "./App.css";
import RoutComponent from "./Components/RoutComponent";
import Header from "./Components/UIUX/Header";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Catolog from "./Components/Pages/Products";

const path = createBrowserRouter([
  {
    path: "/",
    element: <RoutComponent />,
    children: [{ path: "/", element: <Catolog /> }],
  },
]);

function App() {
  return <RouterProvider router={path}></RouterProvider>;
}

export default App;
