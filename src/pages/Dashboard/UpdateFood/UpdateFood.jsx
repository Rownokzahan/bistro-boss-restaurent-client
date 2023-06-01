import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const UpdateFood = () => {
  const { _id, name, category, price, recipe } = useLoaderData() || {};
  const [axiosSecure] = useAxiosSecure();
  const image_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;
  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    // upload image
    const formData = new FormData();
    formData.append("image", data.image[0]);
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;
    fetch(image_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imageUrl = imgResponse.data.display_url;
          const food = data;
          food.image = imageUrl;
          food.price = parseFloat(food.price);
            axiosSecure.patch(`/menu/${_id}`, food).then((data) => {
            if (data.data.modifiedCount > 0) {
              toast.success("Food Item Updated Successfuly !");
            }
            if (data.data.modifiedCount === 0) {
              toast("You haven't updated anything!");
            }
          });
        }
      });
  };

  return (
    <>
      <Helmet>
        <title>Bistro | Add Food</title>
      </Helmet>
      <div className="flex-grow py-12">
        <SectionTitle heading={"UPDATE ITEM"} subHeading={"What's to update?"} />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-3xl mx-auto space-y-6 bg-[#F6F6F6] p-12"
        >
          <div className="flex flex-col gap-2">
            <label className="font-medium" htmlFor="name">
              Recipe name*
            </label>
            <input
              type="text"
              placeholder="Recipe name"
              defaultValue={name}
              {...register("name", { required: true })}
              name="name"
              id="name"
              className="input input-bordered"
              required
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-medium" htmlFor="category">
                Category
              </label>
              <select
                name="category"
                defaultValue={category}
                {...register("category", { required: true })}
                id="category"
                className="select select-bordered"
                required
              >
                <option disabled value={""}>
                  --Choose An Category--
                </option>
                <option value={"pizza"}>Pizza</option>
                <option value={"dessert"}>Dessert</option>
                <option value={"soup"}>Soup</option>
                <option value={"salad"}>Salad</option>
                <option value={"drinks"}>Drinks</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-medium" htmlFor="price">
                Price*
              </label>
              <input
                type="number"
                placeholder="Price"
                defaultValue={price}
                {...register("price")}
                name="price"
                id="price"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-medium" htmlFor="details">
              Recipe Details*
            </label>
            <textarea
              className="textarea input-bordered"
              placeholder="Recipe Details"
              defaultValue={recipe}
              {...register("recipe")}
              name="recipe"
              id="recipe"
              rows="6"
              required
            ></textarea>
          </div>
          <div className="flex flex-col gap-2">
            <input
              type="file"
              {...register("image", { required: true })}
              required
            />
          </div>

          <button
            type="submit"
            className="bg-[#D1A054] text-white p-3 rounded-md flex items-center gap-1"
          >
            Update Item <FaUtensils />
          </button>
        </form>
      </div>
    </>
  );
};

export default UpdateFood;
