import { Link } from "react-router-dom";
import ActiveLink from "./ActiveLink";
import { AiFillHome, AiTwotoneShopping } from "react-icons/ai";
import { GoCalendar } from "react-icons/go";
import { IoWalletSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { TbStarsFilled } from "react-icons/tb";
import { MdMail, MdPermContactCalendar } from "react-icons/md";
import { BiFoodMenu } from "react-icons/bi";
import useCart from "../../../hooks/useCart";

const Sidebar = () => {
  const [cart] = useCart();

  return (
    <div className="bg-[#D1A054] w-max py-6 px-2 md:py-12 md:pl-8 md:pr-12 min-h-screen">
      <div className="mb-8 md:mb-12 hidden md:block">
        <Link to="/dashboard">
          <p className="text-2xl font-bold">BISTRO BOSS</p>
          <p className="tracking-widest font-semibold">Restaurant</p>
        </Link>
      </div>

      {/* {Nav links} */}
      <div className="font-cinzel uppercase flex flex-col gap-6">
        <ActiveLink to={"/dashboard"}>
          <AiFillHome className="text-xl mb-1" />
          <span className="hidden md:block">User Home</span>
        </ActiveLink>

        <ActiveLink to={"/dashboard/reservation"}>
          <GoCalendar className="text-xl mb-1" />
          <span className="hidden md:block"> reservation</span>
        </ActiveLink>

        <ActiveLink to={"/dashboard/payment"}>
          <IoWalletSharp className="text-xl mb-1" />
          <span className="hidden md:block">payment history</span>
        </ActiveLink>

        <ActiveLink to={"/dashboard/my-cart"}>
          <div className="relative">
            <FaShoppingCart className="text-xl mb-1" />
            <span className="absolute -top-[10px] -right-2 bg-[#EEFF25] px-1 rounded-full text-black  font-inter text-xs">
              {cart?.length}
            </span>
          </div>
          <span className="hidden md:block">my cart</span>
        </ActiveLink>

        <ActiveLink to={"/dashboard/review"}>
          <TbStarsFilled className="text-xl mb-1" />
          <span className="hidden md:block">add review</span>
        </ActiveLink>

        <ActiveLink to={"/dashboard/booking"}>
          <MdPermContactCalendar className="text-xl mb-1" />
          <span className="hidden md:block">my booking</span>
        </ActiveLink>
      </div>

      {/* divider */}
      <div className="border-b border-white my-8"></div>

      {/* Front end navlinks */}
      <div className="ont-cinzel uppercase flex flex-col gap-6">
        <ActiveLink to={"/"}>
          <AiFillHome className="text-xl mb-1" />
          <span className="hidden md:block">Home</span>
        </ActiveLink>

        <ActiveLink to={"/menu"}>
          <BiFoodMenu className="text-xl mb-1" />
          <span className="hidden md:block">Our Menu</span>
        </ActiveLink>

        <ActiveLink to={"/order/salad"}>
          <AiTwotoneShopping className="text-xl mb-1" />
          <span className="hidden md:block">Order Now</span>
        </ActiveLink>

        <ActiveLink to={"/contact"}>
          <MdMail className="text-xl mb-px" />
          <span className="hidden md:block">Contact us</span>
        </ActiveLink>
      </div>
    </div>
  );
};

export default Sidebar;
