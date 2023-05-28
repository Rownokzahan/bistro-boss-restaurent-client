import { useContext } from "react";
import ActiveLink from "./ActiveLink";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import useCart from "../../../hooks/useCart";

const NavBar = () => {
  const { user, logout } = useContext(AuthContext);
  const [cart] = useCart();

  const handleLogout = () => {
    logout()
      .then(() => {})
      .catch((error) => console.log(error.message));
  };

  const navItems = (
    <>
      <ActiveLink to={"/"}>Home</ActiveLink>
      <ActiveLink to={"/contact"}>CONTACT us</ActiveLink>
      <ActiveLink to={"/menu"}>Our Menu</ActiveLink>
      <ActiveLink to={"/order/salad"}>Order Now</ActiveLink>
      <ActiveLink to={"/cart"}>
        <div className="relative">
          <HiOutlineShoppingCart />
          <span className="absolute -top-4 -right-2 text-[#BB8506]">
            {cart?.length}
          </span>
        </div>
      </ActiveLink>
      {user ? (
        <>
          <div className="flex gap-2 items-center">
            <button onClick={handleLogout} className="">
              Sign Out
            </button>
            {user?.photoURL ? (
              <img
                src={user?.photoURL}
                className="w-7 h-7 rounded-full"
                alt=""
              />
            ) : (
              <FaUserCircle className="text-xl" />
            )}
          </div>
        </>
      ) : (
        <ActiveLink to={"/login"}>Login</ActiveLink>
      )}
    </>
  );

  return (
    <nav className="lg:flex fixed z-20 max-w-screen-xl w-full py-5 px-8 bg-black bg-opacity-40 text-white  justify-between items-center font-semibold uppercase">
      <div>
        <Link to="/">
          <p className="text-2xl font-bold">BISTRO BOSS</p>
          <p className="tracking-widest">Restaurant</p>
        </Link>
      </div>
      <div className="hidden lg:flex items-center gap-8">{navItems}</div>

      <div className="lg:hidden flex flex-col gap-4">{navItems}</div>
    </nav>
  );
};

export default NavBar;
