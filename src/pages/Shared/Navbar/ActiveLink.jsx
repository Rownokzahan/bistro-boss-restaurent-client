import { NavLink } from 'react-router-dom';

const ActiveLink = ({ to, children }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => isActive ? "text-[#EEFF25]" : ""}
        >{children}</NavLink>
    );
};

export default ActiveLink;