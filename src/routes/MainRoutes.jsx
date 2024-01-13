import Dashboard from "../pages/dashboard/Dashboard";
import Vault from "../pages/vault/Vault";

import MainLayout from "../layout/MainLayout";

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "vault",
      element: <Vault />,
    },
  ],
};

export default MainRoutes;
