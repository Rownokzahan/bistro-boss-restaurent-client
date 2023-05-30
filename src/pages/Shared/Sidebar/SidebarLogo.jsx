import { Link } from "react-router-dom";

const SidebarLogo = () => {
    return (
      <Link to="/dashboard">
        <p className="text-2xl font-bold">BISTRO BOSS</p>
        <p className="tracking-widest font-semibold">Restaurant</p>
      </Link>
    );
};

export default SidebarLogo;