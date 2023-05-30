import FrontendLinks from "./FrontendLinks";
import AdminLinks from "./AdminLinks";
import UserLinks from "./UserLinks";
import SidebarLogo from "./SidebarLogo";

const Sidebar = () => {
  //TODO: Checking Admin will be dynamic from database data
  const isAdmin = true;

  return (
    <div className="bg-[#D1A054] w-max py-6 px-2 md:py-12 md:pl-8 md:pr-12 min-h-screen">
      <div className="mb-8 md:mb-12 hidden md:block">
        <SidebarLogo />
      </div>

      {isAdmin ? <AdminLinks /> : <UserLinks />}

      {/* divider */}
      <div className="border-b border-white my-8"></div>

      <FrontendLinks />
    </div>
  );
};

export default Sidebar;
