import ActiveLink from "./ActiveLink";
import { AiFillHome } from "react-icons/ai";
import { FaUserFriends, FaUtensils } from "react-icons/fa";
import { GoCalendar } from "react-icons/go";

const AdminLinks = () => {
  return (
    <div className="flex flex-col gap-6">
      <ActiveLink to={"/dashboard"} icon={AiFillHome} label="Admin Home" />

      <ActiveLink
        to={"/dashboard/add-food"}
        icon={FaUtensils}
        label="Add Food"
      />

      <ActiveLink
        to={"/dashboard/foods"}
        icon={FaUtensils}
        label="Manage Foods"
      />

      <ActiveLink
        to={"/dashboard/bookings"}
        icon={GoCalendar}
        label="Manage Bookings"
      />

      <ActiveLink
        to={"/dashboard/users"}
        icon={FaUserFriends}
        label="Manage Users"
      />
    </div>
  );
};

export default AdminLinks;
