import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "../src/style/output.css";
import { Provider } from "react-redux";
import store from "./slices/store.js";
import { FetchPost } from "./slices/CrudifSlice.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Singlepost from "./components/Singlepost.jsx";
import Home from "./components/Home.jsx";
import Layoutjsx from "./Layout/Layout.jsx";
store.dispatch(FetchPost());
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layoutjsx />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
      },
      {
        path: "/viewpost/:id",
        element: <Singlepost />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
