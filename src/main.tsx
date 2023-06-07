import ReactDOM from "react-dom/client";
import "./index.css";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home.tsx";
import AddEmployee from "./pages/add.tsx";
import Employees from "./pages/employees.tsx";
import EditEmployee from "./pages/Edit.tsx";

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
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
