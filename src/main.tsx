import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Sobre from "./pages/Sobre.tsx";
import TimeLine from "./pages/TimeLine.tsx";
import QuizPage from "./pages/QuizPage.tsx";

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
        path: "timeline",
        element: <TimeLine />,
      },
      {
        path: "quizpage",
        element: <QuizPage />,
      },
      {
        path: "/sobre",
        element: <Sobre />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
