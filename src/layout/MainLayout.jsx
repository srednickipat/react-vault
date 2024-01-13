import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div style={{ display: "flex", width: "100%" }}>
      <div style={{ width: "100%" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
