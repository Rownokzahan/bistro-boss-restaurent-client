import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import useCart from "../../../hooks/useCart";
import CheckOut from "./CheckOut";


const stripePromise = loadStripe(import.meta.env.VITE_PAYEMENT_GATEWAY_PK);

const Payment = () => {
  const [cart] = useCart();
  const total = cart?.reduce((sum, item) => sum + item.food?.price, 0);
  const price = parseFloat(total.toFixed(2));

  return (
    <>
      <Helmet>
        <title>Bistro | Payment</title>
      </Helmet>
      <div className="bg-[#F6F6F6] flex-grow py-12">
        <SectionTitle heading={"Payment"} subHeading={"Please process"} />
        <Elements stripe={stripePromise}>
          <CheckOut price={price} cart={cart} />
        </Elements>
      </div>
    </>
  );
};

export default Payment;
