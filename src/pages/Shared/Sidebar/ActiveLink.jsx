import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? "text-white" : "")}
      end
    >
      <div className="flex gap-1 items-end">{children}</div>
    </NavLink>
  );
};

export default ActiveLink;
