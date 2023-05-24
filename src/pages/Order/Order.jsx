import { useEffect, useState } from "react";
import banner from "../../assets/shop/banner2.jpg";
import Cover from "../Shared/Cover";
import FoodCard from "../../components/FoodCard";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const { category } = useParams();
  const [foods, setFoods] = useState([]);
  const [currentCategory, setCurrenCategory] = useState(category || "salad");

  useEffect(() => {
    fetch(`http://localhost:5000/menu?category=${currentCategory}`)
      .then((res) => res.json())
      .then((data) => {
        setFoods(data);
      })
      .catch((error) => console.log(error));
  }, [currentCategory]);

  return (
    <>
      <Helmet>
        <title>Bistro | Order Food</title>
      </Helmet>

      <Cover
        img={banner}
        title={"Our Foods"}
        description={"Would you like to try a dish?"}
        top_margin={0}
      />

      <div className="flex items-center font-inter mt-24 mb-12 justify-between max-w-md mx-auto">
        <button
          onClick={() => setCurrenCategory("salad")}
          className={`uppercase ${
            currentCategory === "salad"
              ? "text-[#BB8506] underline underline-offset-2"
              : ""
          }`}
        >
          Salad
        </button>
        <button
          onClick={() => setCurrenCategory("pizza")}
          className={`uppercase ${
            currentCategory === "pizza"
              ? "text-[#BB8506] underline underline-offset-2"
              : ""
          }`}
        >
          pizza
        </button>
        <button
          onClick={() => setCurrenCategory("soup")}
          className={`uppercase ${
            currentCategory === "soup"
              ? "text-[#BB8506] underline underline-offset-2"
              : ""
          }`}
        >
          soups
        </button>
        <button
          onClick={() => setCurrenCategory("dessert")}
          className={`uppercase ${
            currentCategory === "dessert"
              ? "text-[#BB8506] underline underline-offset-2"
              : ""
          }`}
        >
          desserts
        </button>
        <button
          onClick={() => setCurrenCategory("drinks")}
          className={`uppercase ${
            currentCategory === "drinks"
              ? "text-[#BB8506] underline underline-offset-2"
              : ""
          }`}
        >
          drinks
        </button>
      </div>
      <div className="grid md:grid-cols-3 gap-6 font-inter mb-24">
        {foods?.map((item) => (
          <FoodCard key={item._id} item={item} />
        ))}
      </div>
    </>
  );
};

export default Order;
