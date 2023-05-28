import { Outlet } from "react-router-dom";
import Sidebar from "../pages/Shared/Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Dashboard;
