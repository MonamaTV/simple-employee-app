import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.tsx";
import EditEmployee from "./pages/Edit.tsx";
import AddEmployee from "./pages/Add.tsx";
import Employees from "./pages/Employees.tsx";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/add",
    element: <AddEmployee />,
  },
  {
    path: "/edit/:employeeId",
    element: <EditEmployee />,
  },
  {
    path: "/employees",
    element: <Employees />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
