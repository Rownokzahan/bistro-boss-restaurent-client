import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import SectionTitle from "../../../components/SectionTitle";
import CartItemRow from "./CartItemRow";
import { Link } from "react-router-dom";

const MyCart = () => {
  const [cart, refetch] = useCart();

  return (
    <>
      <Helmet>
        <title>Bistro | My Cart</title>
      </Helmet>

      <div className="bg-[#F6F6F6] flex-grow py-12">
        <SectionTitle heading={"WANNA ADD MORE?"} subHeading={"My Cart"} />

        <div className="bg-white w-max mx-auto p-12">
          <div className="flex items-center justify-between text-xl font-bold font-cinzel">
            <h3>Total orders: {cart.length}</h3>
            <h3>
              total price: $
              {cart?.reduce((sum, item) => sum + item.food?.price, 0)}
            </h3>
            <Link to={'/dashboard/payment'} className="bg-[#D1A054] px-4 py-2 rounded text-white text-lg">Pay</Link>
          </div>

          <div className="overflow-x-auto">
            <table className="relative overflow-x-auto w-full text-[#727272] rounded-md my-10">
              <thead className="font-inter text-sm uppercase tracking-wide text-white font-medium">
                <tr>
                  <td className="rounded-tl-lg bg-[#D1A054] text-left py-5 px-8">
                    {""}
                  </td>
                  <td className="bg-[#D1A054] text-left py-5 px-6">
                    Item Image
                  </td>
                  <td className="bg-[#D1A054] py-5 px-6 text-left">
                    Item Name
                  </td>
                  <td className="bg-[#D1A054] py-5 px-6 text-left">Price</td>
                  <td className="rounded-tr-lg bg-[#D1A054] py-5 px-6 text-left">
                    Action
                  </td>
                </tr>
              </thead>

              <tbody className="divide-y-2">
                {cart?.map((item, index) => (
                  <CartItemRow
                    key={item._id}
                    item={item}
                    index={index + 1}
                    refetch={refetch}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyCart;
