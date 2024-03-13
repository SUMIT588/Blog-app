import "./index.css";

import { AuthLayout, Login, Signup } from "./components/index.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AddPost from "../src/pages/AddPost.js";
import AllPosts from "../src/pages/AllPosts.js";
import App from "./App.js";
import EditPost from "../src/pages/EditPost.js";
import Home from "../src/pages/Home.js";
import Post from "./pages/Post";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom/client";
import store from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        ),
      },
      {
        path: "/sign-up",
        element: (
          <AuthLayout authentication={false}>
            <Signup />
          </AuthLayout>
        ),
      },
      {
        path: "/all-posts",
        element: (
          <AuthLayout authentication>
            <AllPosts />
          </AuthLayout>
        ),
      },
      {
        path: "/edit-post/:slug",
        element: (
          <AuthLayout authentication>
            <EditPost />
          </AuthLayout>
        ),
      },
      {
        path: "/add-post",
        element: (
          <AuthLayout authentication>
            <AddPost />
          </AuthLayout>
        ),
      },

      {
        path: "/post/:slug",
        element: <Post />,
      },
    ],
  },
]);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
