import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ClientRootLayout from "../components/layout/ClientRootLayout";
import AdminDashboard from "../pages/admin/Dashboard";
import ClientDashboard from "../pages/client/Dashboard";
import AdminRootLayout from "../components/layout/AdminRootLayout";
import SignIn from "../pages/auth/SignIn";
import SeasonQueue from "../pages/client/SeasonQueue";
import CalcTheCost from "../pages/client/CalcTheCost";
import WorkersDashboard from "../pages/client/WorkersDashboard";
import WorkerHoursPage from "../components/pages/workers/salary/WorkerHoursPage";
import CompaniesPage from "../pages/admin/CompaniesPage";
import UsersPage from "../pages/admin/UsersPage";
import Dashboard from "../pages/admin/Dashboard";
import SeasonStatistics from "../pages/client/SeasonStatistics";
import SeasonDetailsPage from "../pages/client/SeasonDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "/client",
    element: <ClientRootLayout />,
    children: [
      {
        index: true,
        element: <ClientDashboard />,
      },
      {
        path: "season",
        children: [
          {
            path: "queue",
            element: <SeasonQueue />,
          },
          {
            path: "calc-cost",
            element: <CalcTheCost />,
          },
        ],
      },
      {
        path: "workers",
        element: <WorkersDashboard />,
      },
      {
        path: "statistics",
        element: <SeasonStatistics />,
      },
      {
        path: "workers/:workerID/salary",
        element: <WorkerHoursPage workerName="احمد خالد" />,
      },
      {
        path: "settings",
        element: <SeasonDetailsPage />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminRootLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "companies",
        element: <CompaniesPage />,
      },
      {
        path: "users",
        element: <UsersPage />,
      },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
