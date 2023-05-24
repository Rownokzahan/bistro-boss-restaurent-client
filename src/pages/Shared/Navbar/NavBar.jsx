import ActiveLink from "./ActiveLink";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {

    const navItems =
        <>
            <ActiveLink to={'/'}>Home</ActiveLink>
            <ActiveLink to={'/contact'}>CONTACT us</ActiveLink>
            <ActiveLink to={'/dashboard'}>DASHBOARD</ActiveLink>
            <ActiveLink to={'/menu'}>Our Menu</ActiveLink>
            <ActiveLink to={'/order/salad'}>Order</ActiveLink>
            <div className="flex gap-2 items-center">
                <button className="">Sign Out</button>
                <FaUserCircle className="text-xl"/>
            </div>
        </>

    return (
      <nav className="lg:flex fixed z-20 max-w-screen-xl w-full py-5 px-8 bg-black bg-opacity-40 text-white  justify-between items-center font-semibold uppercase">
        <div>
          <Link to="/">
            <p className="text-2xl font-bold">BISTRO BOSS</p>
            <p className="tracking-widest">Restaurant</p>
          </Link>
        </div>
        <div className="hidden lg:flex gap-8">{navItems}</div>

        <div className="lg:hidden flex flex-col gap-4">{navItems}</div>
      </nav>
    );
};

export default NavBar;