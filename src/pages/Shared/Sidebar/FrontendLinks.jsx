import { AiFillHome, AiTwotoneShopping } from "react-icons/ai";
import { MdMail } from "react-icons/md";
import { BiFoodMenu } from "react-icons/bi";
import ActiveLink from "./ActiveLink";

const FrontendLinks = () => {
  return (
    <div className="flex flex-col gap-6">
      <ActiveLink to={"/"} icon={AiFillHome} label={"Home"} />
      <ActiveLink to={"/menu"} icon={BiFoodMenu} label={"Our Menu"} />
      <ActiveLink
        to={"/order/salad"}
        icon={AiTwotoneShopping}
        label={"Order Now"}
      />
      <ActiveLink to={"/contact"} icon={MdMail} label={"Contact us"} />
    </div>
  );
};

export default FrontendLinks;
