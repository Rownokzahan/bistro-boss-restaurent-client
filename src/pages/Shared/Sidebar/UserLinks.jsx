import ActiveLink from "./ActiveLink";
import { AiFillHome } from "react-icons/ai";
import { GoCalendar } from "react-icons/go";
import { IoWalletSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { TbStarsFilled } from "react-icons/tb";
import { MdPermContactCalendar } from "react-icons/md";
import useCart from "../../../hooks/useCart";

const UserLinks = () => {
  const [cart] = useCart();

  return (
    <div className="flex flex-col gap-6">
      <ActiveLink to={"/dashboard"} icon={AiFillHome} label="User Home" />

      <ActiveLink
        to={"/dashboard/reservation"}
        icon={GoCalendar}
        label="Reservation"
      />

      <ActiveLink
        to={"/dashboard/payment-history"}
        icon={IoWalletSharp}
        label="Payment History"
      />

      <ActiveLink
        to={"/dashboard/my-cart"}
        icon={FaShoppingCart}
        label="My Cart"
        badge={
          <span className="absolute -top-[10px] -right-2 bg-[#EEFF25] px-1 rounded-full text-black font-inter text-xs">
            {cart?.length}
          </span>
        }
      ></ActiveLink>

      <ActiveLink
        to={"/dashboard/review"}
        icon={TbStarsFilled}
        label="Add Review"
      />

      <ActiveLink
        to={"/dashboard/booking"}
        icon={MdPermContactCalendar}
        label="My Booking"
      />
    </div>
  );
};

export default UserLinks;
