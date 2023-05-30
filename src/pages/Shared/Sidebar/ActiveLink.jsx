import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, icon: Icon, badge = "", label }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? "text-white" : "")}
      end
    >
      <div className="flex gap-1 items-end">
        <div className="relative">
          <Icon className="text-xl mb-1" />
          {badge}
        </div>
        <span className="hidden md:block font-cinzel uppercase">{label}</span>
      </div>
    </NavLink>
  );
};

export default ActiveLink;
