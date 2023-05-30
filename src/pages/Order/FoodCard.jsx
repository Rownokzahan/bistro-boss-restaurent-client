import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
  const { _id, image, name, recipe, price } = item;
  const { user } = useContext(AuthContext);
  const [, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = () => {
    if (user) {
      const cartItem = { foodId: _id, email: user?.email };

      fetch(`http://localhost:5000/carts`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then(() => {
          refetch(); //refecthing cart data to get updated cart data
          toast.success("Successfully Added To Cart!");
        })
        .catch((error) => console.log(error));
    } else {
      Swal.fire({
        text: "Please log in to add food to your cart.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
      }).then((result) => {
        if (result.isConfirmed) {
          return navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="bg-cover font-inter relative h-full bg-[#F3F3F3] pb-16">
      <img src={image} className="h-52 w-full" alt="" />
      <div className="absolute top-2 right-2 bg-[#1F2937] py-1 px-4 rounded text-white">
        ${price}
      </div>
      <div className="p-8 text-center">
        <h4 className="text-2xl font-semibold mb-2">{name}</h4>
        <p>{recipe}</p>
      </div>
      <div className="my-4">
        <button
          onClick={handleAddToCart}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 uppercase px-6 py-3 border-b-2 border-[#BB8506] rounded-md my-6 text-[#BB8506] bg-[#E8E8E8] hover:bg-[#1F2937]"
        >
          add to cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
